// Handles navigation toggle, scroll animations, and basic form validation.
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navLinks = document.querySelector('.nav-links');
  const navToggle = document.querySelector('.hamburger');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const closeNav = () => {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
    body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
      body.classList.toggle('nav-open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', (!expanded).toString());
    });

    navAnchors.forEach((link) => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          closeNav();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        closeNav();
      }
    });
  }

  const scrollElements = document.querySelectorAll('.scroll-fade');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    scrollElements.forEach((el) => observer.observe(el));
  } else {
    scrollElements.forEach((el) => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear().toString();
  });

  const form = document.querySelector('form[data-validate]');
  if (form) {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      }
    });
  }
});
