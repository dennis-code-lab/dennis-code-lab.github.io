document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");
  const yearSpan = document.getElementById("year");
  const projectCards = document.querySelectorAll(".project-card"); // NEW: project cards for animation

  // MOBILE MENU TOGGLE
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // SMOOTH SCROLL + AUTO CLOSE MENU
  navItems.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

      // Close mobile menu
      navLinks.classList.remove("active");
    });
  });

  // ACTIVE LINK ON SCROLL
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // NEW: Reveal project cards on scroll
    const triggerBottom = window.innerHeight * 0.85;
    projectCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      }
    });
  });

  // INITIAL REVEAL CHECK (in case some cards already in view)
  const triggerBottom = window.innerHeight * 0.85;
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });

  // FOOTER YEAR
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});