// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Auto-close mobile menu when a link is clicked
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class only if menu is open
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});
// Set current year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();