// contact.js

// Wait for DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  // Check if current page is the contact page; exit if not
  const isContactPage = document.querySelector(".page.contact-page");
  if (!isContactPage) return;

  // Select trail container for mouse-driven image trail
  const container = document.querySelector(".trail-container");
  if (!container) return;

  let animationId = null;
  let mouseMoveListener = null;
  let touchMoveListener = null;

  // Configuration for image trail behavior
  const config = {
    imageCount: 8,
    imageLifespan: 800,
    removalDelay: 60,
    mouseThreshold: 80,
    inDuration: 600,
    outDuration: 800,
    inEasing: "cubic-bezier(.07,.5,.5,1)",
    outEasing: "cubic-bezier(.87, 0, .13, 1)",
  };

  // Define image paths for trail
  const images = Array.from(
    { length: config.imageCount },
    (_, i) => `/images/work-items/work-item-${i + 1}.jpg`
  );

  const trail = [];

  // Track pointer position and state
  let mouseX = 0;
  let mouseY = 0;
  let lastMouseX = 0;
  let lastMouseY = 0;

  let isCursorInContainer = false;
  let lastRemovalTime = 0;

  // Create floating elements for background animation
  const createFloatingElements = () => {
    const floatingContainer =
      document.querySelector(".floating-elements");

    if (!floatingContainer) return;

    for (let i = 0; i < 12; i++) {
      const element = document.createElement("div");

      element.className = "floating-element";
      element.style.left = Math.random() * 100 + "%";
      element.style.animationDelay =
        Math.random() * 8 + "s";
      element.style.animationDuration =
        8 + Math.random() * 4 + "s";

      floatingContainer.appendChild(element);
    }
  };

  // Check if pointer is within trail container
  const isInContainer = (x, y) => {
    const rect = container.getBoundingClientRect();

    return (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    );
  };

  // Check if pointer has moved enough to create a new image
  const hasMovedEnough = () => {
    const distance = Math.sqrt(
      Math.pow(mouseX - lastMouseX, 2) +
        Math.pow(mouseY - lastMouseY, 2)
    );

    return distance > config.mouseThreshold;
  };

  // Create a new trail image at pointer position
  const createImage = () => {
    const img = document.createElement("img");

    img.classList.add("trail-img");

    const randomIndex = Math.floor(
      Math.random() * images.length
    );

    const rotation =
      (Math.random() - 0.5) * 40;

    img.src = images[randomIndex];

    const rect = container.getBoundingClientRect();

    const relativeX =
      mouseX - rect.left;

    const relativeY =
      mouseY - rect.top;

    img.style.left = `${relativeX}px`;
    img.style.top = `${relativeY}px`;

    img.style.transform =
      `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;

    img.style.transition =
      `transform ${config.inDuration}ms ${config.inEasing}`;

    container.appendChild(img);

    // Animate to full scale
    setTimeout(() => {
      img.style.transform =
        `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    }, 10);

    // Add to trail array
    trail.push({
      element: img,
      rotation: rotation,
      removeTime:
        Date.now() + config.imageLifespan,
    });
  };

  // Remove oldest image if lifespan exceeded
  const removeOldImages = () => {
    const now = Date.now();

    if (
      now - lastRemovalTime <
        config.removalDelay ||
      trail.length === 0
    ) {
      return;
    }

    const oldestImage = trail[0];

    if (now >= oldestImage.removeTime) {
      const imgToRemove =
        trail.shift();

      imgToRemove.element.style.transition =
        `transform ${config.outDuration}ms ${config.outEasing}`;

      imgToRemove.element.style.transform =
        `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

      lastRemovalTime = now;

      // Remove from DOM after animation
      setTimeout(() => {
        if (
          imgToRemove.element.parentNode
        ) {
          imgToRemove.element.parentNode.removeChild(
            imgToRemove.element
          );
        }
      }, config.outDuration);
    }
  };

  // Handle pointer movement
  const handlePointerMove = (x, y) => {
    mouseX = x;
    mouseY = y;

    isCursorInContainer =
      isInContainer(
        mouseX,
        mouseY
      );

    if (
      isCursorInContainer &&
      hasMovedEnough()
    ) {
      lastMouseX = mouseX;
      lastMouseY = mouseY;

      createImage();
    }
  };

  // Start trail animation
  const startAnimation = () => {
    if (mouseMoveListener) return;

    // Desktop / laptop mouse movement
    mouseMoveListener = (e) => {
      handlePointerMove(
        e.clientX,
        e.clientY
      );
    };

    document.addEventListener(
      "mousemove",
      mouseMoveListener
    );

    // Tablet / mobile touch movement
    touchMoveListener = (e) => {
      if (
        !e.touches ||
        !e.touches.length
      ) {
        return;
      }

      const touch = e.touches[0];

      handlePointerMove(
        touch.clientX,
        touch.clientY
      );
    };

    document.addEventListener(
      "touchmove",
      touchMoveListener,
      { passive: true }
    );

    // Animation loop
    const animate = () => {
      removeOldImages();

      animationId =
        requestAnimationFrame(
          animate
        );
    };

    animate();
  };

  // Stop trail animation
  const stopAnimation = () => {
    if (mouseMoveListener) {
      document.removeEventListener(
        "mousemove",
        mouseMoveListener
      );

      mouseMoveListener = null;
    }

    if (touchMoveListener) {
      document.removeEventListener(
        "touchmove",
        touchMoveListener
      );

      touchMoveListener = null;
    }

    if (animationId) {
      cancelAnimationFrame(
        animationId
      );

      animationId = null;
    }

    trail.forEach((item) => {
      if (item.element.parentNode) {
        item.element.parentNode.removeChild(
          item.element
        );
      }
    });

    trail.length = 0;
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    const form = e.target;

    const submitBtn =
      form.querySelector(".submit-btn");

    if (!submitBtn) return;

    // Let the browser submit the form normally
    // to the Formspree endpoint.
    submitBtn.style.transform =
      "translateY(-1px)";

    submitBtn.textContent =
      "Sending...";

    submitBtn.disabled = true;
  };

  // Enhance form inputs with focus/blur animations
  const enhanceFormInputs = () => {
    const inputs =
      document.querySelectorAll(
        ".form-group input, .form-group textarea, .form-group select"
      );

    inputs.forEach((input) => {
      input.addEventListener(
        "focus",
        () => {
          input.parentElement.style.transform =
            "translateY(-2px)";
        }
      );

      input.addEventListener(
        "blur",
        () => {
          input.parentElement.style.transform =
            "";
        }
      );
    });
  };

  // Add event listeners and initialize
  createFloatingElements();

  enhanceFormInputs();

  const contactForm =
    document.getElementById(
      "contactForm"
    );

  if (contactForm) {
    contactForm.addEventListener(
      "submit",
      handleFormSubmit
    );
  }

  // Start trail on ALL screen sizes
  startAnimation();
});