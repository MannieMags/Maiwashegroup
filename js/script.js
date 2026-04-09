/*
  Maiwashe Group – Enhanced UX JavaScript
  Mobile nav, scroll animations, form handling
*/

document.addEventListener('DOMContentLoaded', () => {
  // ─── Mobile Navigation ───
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const body = document.body;

  // Create overlay element for mobile nav
  let overlay = document.querySelector('.nav-overlay');
  if (!overlay && navMenu) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    navMenu.parentNode.insertBefore(overlay, navMenu);
  }

  function openNav() {
    if (!navMenu) return;
    navMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    body.style.overflow = 'hidden';
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    if (!navMenu) return;
    navMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', 'false');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.contains('active') ? closeNav() : openNav();
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    // Close on overlay click
    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeNav();
      }
    });

    // Close nav on resize if switching to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
          closeNav();
        }
      }, 100);
    });
  }

  // ─── Scroll-triggered Animations (IntersectionObserver) ───
  const animatedElements = document.querySelectorAll('.fade-in-up, .stagger-children');

  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }

  // ─── Header Shadow on Scroll ───
  const header = document.querySelector('header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.35)';
          } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ─── Contact Form Submission ───
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
    });
  }
});