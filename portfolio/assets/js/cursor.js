/* ============================================================
   cursor.js — Custom Cursor Behavior
   ============================================================ */

(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (!cursor || !ring) return;

  /* Follow mouse */
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  /* Click pulse */
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.2)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  /* Hover enlarge on interactive elements */
  const interactiveSelectors = 'a, button, .pcard, .skill-cat, .ecard, .cinfo-row, .chip, .plink, .tag';

  document.querySelectorAll(interactiveSelectors).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
      ring.style.borderColor = 'var(--gold)';
      ring.style.opacity = '0.7';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(201, 168, 76, 0.5)';
      ring.style.opacity = '1';
    });
  });
})();
