/* ============================================================
   nav.js — Scroll Progress Bar & Mobile Navigation
   ============================================================ */

/* ----- Scroll Progress Bar ----- */
(function initScrollProgress() {
  const bar = document.getElementById('nav-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled  = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct       = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* ----- Mobile Navigation Toggle ----- */
function toggleMobileNav() {
  const menu = document.getElementById('mobile-nav');
  const btn  = document.getElementById('nav-mob');
  if (!menu) return;

  const isOpen = menu.classList.toggle('open');

  /* Animate hamburger → X */
  if (btn) {
    const spans = btn.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform  = 'translateY(5.5px) rotate(45deg)';
      spans[1].style.opacity    = '0';
      spans[2].style.transform  = 'translateY(-5.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform  = '';
      spans[1].style.opacity    = '';
      spans[2].style.transform  = '';
    }
  }
}

/* Close mobile nav when clicking outside */
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-nav');
  const btn  = document.getElementById('nav-mob');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    toggleMobileNav();
  }
});

/* Active nav link highlight on scroll */
(function initActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  if (!sections.length || !links.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => obs.observe(s));
})();
