// services.js

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  const isHomePage = document.querySelector(".page.home-page");
  if (!isHomePage) return;

  gsap.registerPlugin(ScrollTrigger);

  let scrollTriggerInstances = [];

  const initAnimations = () => {

    scrollTriggerInstances.forEach((instance) => {
      if (instance) instance.kill();
    });

    scrollTriggerInstances = [];

    const services = gsap.utils.toArray(".service-card");

    if (!services.length) return;

    const mainTrigger = ScrollTrigger.create({
      trigger: services[0],
      start: "top 50%",
      endTrigger: services[services.length - 1],
      end: "top 150%",
    });

    scrollTriggerInstances.push(mainTrigger);

    services.forEach((service, index) => {

      const isLastServiceCard =
        index === services.length - 1;

      const serviceCardInner =
        service.querySelector(".service-card-inner");

      if (!serviceCardInner) return;

      if (!isLastServiceCard) {

        const pinTrigger = ScrollTrigger.create({
          trigger: service,
          start: "top 45%",
          endTrigger: ".contact-section",
          end: "top 90%",
          pin: true,
          pinSpacing: false,
        });

        scrollTriggerInstances.push(pinTrigger);

        const scrollAnimation = gsap.to(
          serviceCardInner,
          {
            y: `-${(services.length - index) * 14}vh`,
            ease: "none",

            scrollTrigger: {
              trigger: service,
              start: "top 45%",
              endTrigger: ".contact-section",
              end: "top 90%",
              scrub: true,
            },
          }
        );

        scrollTriggerInstances.push(
          scrollAnimation.scrollTrigger
        );
      }
    });

    ScrollTrigger.refresh();
  };

  initAnimations();

  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      initAnimations();
    }, 200);
  });
});