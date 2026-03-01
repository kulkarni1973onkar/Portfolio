/* ============================================================
   animations.js — Scroll Reveal (Intersection Observer)
   ============================================================ */

(function initScrollReveal() {
  /* Elements to animate in on scroll */
  const targets = document.querySelectorAll(
    '.pcard, .skill-cat, .ecard, .cinfo-row, .about-text, .contact-left'
  );

  if (!targets.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);   // Only animate once
        }
      });
    },
    { threshold: 0.08 }
  );

  targets.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(18px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
    obs.observe(el);
  });
})();
