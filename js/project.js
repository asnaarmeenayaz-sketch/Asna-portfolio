
/* =========================================================
   PROJECTS PAGE
   CASE STUDY MODAL
   Asna Armeen Ayaz
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     PROJECT DATA
  ========================================================= */

  const projectsData = {

    "01": {
      number: "01",
      category: "Web Application / Full-Stack Development",
      title: "Boardroom & Vehicle Reservation",
      image: "/images/work-items/work-item-1.jpg",
      lead: "A streamlined reservation platform for managing boardroom spaces and company vehicles through a clear digital booking experience.",
      challenge: "The goal was to make shared resource booking easier to understand and manage while keeping the interface clean and structured.",
      solution: "A focused reservation interface was designed around clear availability, organized booking information, and straightforward navigation.",
      outcome: "A structured digital experience that makes reservations easier to browse, understand, and manage.",
      role: "Web Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "02": {
      number: "02",
      category: "Healthcare Website / Full-Stack Development",
      title: "Sanora Health",
      image: "/images/work-items/work-item-2.jpg",
      lead: "A modern healthcare platform focused on accessible digital experiences, consultation workflows, and a clean interface.",
      challenge: "Healthcare information and interactions needed to remain clear and approachable without creating unnecessary visual complexity.",
      solution: "The experience combines structured content, intuitive navigation, and a focused interface for healthcare-related interactions.",
      outcome: "A clean and accessible healthcare digital experience designed around clarity and usability.",
      role: "Full-Stack Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "03": {
      number: "03",
      category: "Personal Finance / Frontend Development",
      title: "Novora",
      image: "/images/work-items/work-item-3.jpg",
      lead: "A personal finance and expense tracking experience designed to make everyday financial information easier to understand and manage.",
      challenge: "Financial information can quickly become overwhelming when too much information is presented at once.",
      solution: "Novora uses a focused interface with clear organization for expenses, financial information, and everyday tracking.",
      outcome: "A structured personal finance experience with a simple and focused visual system.",
      role: "Frontend Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "04": {
      number: "04",
      category: "Data Analytics / Dashboard",
      title: "PulseSales — Sales & Performance Dashboard",
      image: "/images/work-items/work-item-4.jpg",
      lead: "A dashboard-focused interface created to present sales activity, performance information, and business data through a structured visual experience.",
      challenge: "Large amounts of sales and performance information needed to remain readable and easy to scan.",
      solution: "The interface organizes key information into a clear dashboard structure with focused data presentation.",
      outcome: "A clean dashboard experience designed to make business performance information easier to explore.",
      role: "UI Design & Frontend Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "05": {
      number: "05",
      category: "Corporate Website / Web Development",
      title: "Valence & Holt",
      image: "/images/work-items/work-item-6.jpg",
      lead: "A modern corporate and digital consultancy website combining editorial layouts, refined typography, and a structured visual system.",
      challenge: "The website needed to communicate a professional identity while maintaining a modern and visually distinctive presentation.",
      solution: "Editorial composition, typography, spacing, and structured sections were combined to create a refined corporate experience.",
      outcome: "A polished digital presence with a professional and contemporary visual direction.",
      role: "Web Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "06": {
      number: "06",
      category: "Travel & Hotel Booking / Full-Stack Development",
      title: "Vespera Voyages & Luxury Escapes",
      image: "/images/work-items/work-item-7.jpg",
      lead: "A luxury travel experience built around destination discovery, hotel exploration, and a polished booking journey.",
      challenge: "The experience needed to combine destination inspiration with practical travel and booking information.",
      solution: "An immersive editorial interface brings destinations, accommodation, and booking interactions together in a structured experience.",
      outcome: "A premium travel-focused digital experience centered around discovery and booking.",
      role: "Web Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "07": {
      number: "07",
      category: "Luxury E-Commerce / Web Development",
      title: "Atelier Vael",
      image: "/images/work-items/work-item-9.jpg",
      lead: "A luxury e-commerce concept focused on refined product presentation, editorial composition, intuitive navigation, and a premium shopping experience.",
      challenge: "The digital storefront needed to balance product information with a strong luxury visual identity.",
      solution: "Editorial layouts, refined typography, product-focused sections, and intuitive navigation create a premium shopping journey.",
      outcome: "A sophisticated e-commerce experience designed around product presentation and visual clarity.",
      role: "Web Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "08": {
      number: "08",
      category: "Fitness & Wellness / Full-Stack Development",
      title: "AuraPulse Studio",
      image: "/images/work-items/work-item-10.jpg",
      lead: "A fitness and wellness digital experience designed to present classes, programs, services, and studio information through a modern interface.",
      challenge: "The experience needed to present multiple wellness offerings without making the interface feel crowded.",
      solution: "Structured content sections and a modern visual system organize classes, programs, services, and studio information.",
      outcome: "An engaging fitness and wellness website focused on clear content and an approachable digital experience.",
      role: "Web Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    },

    "09": {
      number: "09",
      category: "Figma to Frontend Development",
      title: "AlumiCraft",
      image: "/images/work-items/work-item-5.jpg",
      lead: "A frontend implementation translated from a Figma design into a responsive web experience.",
      challenge: "The main focus was maintaining visual accuracy while translating the original design into a responsive frontend.",
      solution: "The implementation focuses on typography, spacing, layout accuracy, responsive behavior, and clean frontend structure.",
      outcome: "A responsive frontend experience closely translated from the original Figma design.",
      role: "Frontend Development",
      year: "2026",
      techStack: ["figma"]
    },

    "10": {
      number: "10",
      category: "Mobile Application / Full-Stack Development",
      title: "Sanora Health Mobile App",
      image: "/images/work-items/work-item-8.jpg",
      lead: "A mobile healthcare application concept focused on accessible healthcare interactions, clear navigation, and a streamlined user experience.",
      challenge: "Healthcare interactions needed to remain simple and accessible within a smaller mobile interface.",
      solution: "The experience uses focused navigation, structured information, and simplified interaction patterns for mobile users.",
      outcome: "A streamlined mobile healthcare experience designed around accessibility and ease of use.",
      role: "UI Design & Development",
      year: "2026",
      techStack: ["HTML", "CSS", "JavaScript"]
    }

  };


  /* =========================================================
     CREATE MODAL
  ========================================================= */

  const modal = document.createElement("div");

  modal.className = "case-study-modal";
  modal.id = "case-study-modal";

  modal.innerHTML = `
    <div class="case-study-overlay"></div>

    <div class="case-study-dialog">

      <button class="modal-close-btn" type="button" aria-label="Close case study">
        ×
      </button>

      <div class="modal-header">

        <div class="modal-header-meta"></div>

        <h2 class="modal-title"></h2>

      </div>

      <div class="modal-cover">
        <img class="modal-cover-img" src="" alt="">
      </div>

      <div class="modal-content">

        <p class="modal-project-lead"></p>

        <div class="modal-section">
          <span class="modal-section-label">THE CHALLENGE</span>
          <p class="modal-project-challenge"></p>
        </div>

        <div class="modal-section">
          <span class="modal-section-label">THE SOLUTION</span>
          <p class="modal-project-solution"></p>
        </div>

        <div class="modal-section">
          <span class="modal-section-label">OUTCOME</span>
          <p class="modal-project-outcome"></p>
        </div>

        <div class="modal-details">

          <div>
            <span class="modal-detail-label">ROLE</span>
            <p class="modal-project-role"></p>
          </div>

          <div>
            <span class="modal-detail-label">YEAR</span>
            <p class="modal-project-year"></p>
          </div>

          <div>
            <span class="modal-detail-label">TECHNOLOGY</span>
            <p class="modal-project-stack"></p>
          </div>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(modal);


  /* =========================================================
     ELEMENTS
  ========================================================= */

  const closeBtn = modal.querySelector(".modal-close-btn");
  const overlay = modal.querySelector(".case-study-overlay");

  const metaEl = modal.querySelector(".modal-header-meta");
  const titleEl = modal.querySelector(".modal-title");
  const imgEl = modal.querySelector(".modal-cover-img");

  const leadEl = modal.querySelector(".modal-project-lead");
  const challengeEl = modal.querySelector(".modal-project-challenge");
  const solutionEl = modal.querySelector(".modal-project-solution");
  const outcomeEl = modal.querySelector(".modal-project-outcome");

  const roleEl = modal.querySelector(".modal-project-role");
  const yearEl = modal.querySelector(".modal-project-year");
  const stackEl = modal.querySelector(".modal-project-stack");


  /* =========================================================
     OPEN MODAL
  ========================================================= */

  function openProjectModal(projectId) {

    const project = projectsData[projectId];

    if (!project) return;

    metaEl.innerHTML = `
      <span>${project.number}</span>
      <span aria-hidden="true">·</span>
      <span>${project.category}</span>
    `;

    titleEl.textContent = project.title;

    imgEl.src = project.image;
    imgEl.alt = project.title;

    leadEl.textContent = project.lead;
    challengeEl.textContent = project.challenge;
    solutionEl.textContent = project.solution;
    outcomeEl.textContent = project.outcome;

    roleEl.textContent = project.role;
    yearEl.textContent = project.year;
    stackEl.textContent = project.techStack.join(" · ");

    modal.classList.add("is-active");

    document.body.style.overflow = "hidden";
  }


  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  function closeProjectModal() {

    modal.classList.remove("is-active");

    document.body.style.overflow = "";
  }


  /* =========================================================
     BUTTONS
  ========================================================= */

  document.querySelectorAll(".project-case-btn").forEach((button) => {

    button.addEventListener("click", () => {

      const projectId = button.getAttribute("data-project-trigger");

      openProjectModal(projectId);

    });

  });


  /* =========================================================
     CLOSE EVENTS
  ========================================================= */

  closeBtn.addEventListener("click", closeProjectModal);

  overlay.addEventListener("click", closeProjectModal);


  /* =========================================================
     ESC KEY
  ========================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("is-active")) {

      closeProjectModal();

    }

  });

});
