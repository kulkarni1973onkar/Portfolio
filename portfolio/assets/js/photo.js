/* ============================================================
   photo.js — Profile Photo Handler
   ============================================================ */

/**
 * Sets the portfolio profile photo from a static local file path.
 * Replaces the placeholder automatically on page load.
 */
function setProfilePhoto() {
  const PHOTO_SRC = 'Image.png'; // ← Change this to your actual photo path

  const wrap = document.querySelector('.profile-img-wrap');
  if (!wrap) return;

  /* Remove placeholder */
  const placeholder = document.getElementById('photo-placeholder');
  if (placeholder) placeholder.remove();

  /* Remove any existing <img> */
  const existing = wrap.querySelector('img');
  if (existing) existing.remove();

  /* Create and insert the profile image */
  const img   = document.createElement('img');
  img.src     = PHOTO_SRC;
  img.alt     = CONFIG?.name || 'Profile Photo';
  img.loading = 'lazy';
  wrap.insertBefore(img, wrap.firstChild);

  /* Reveal the "change photo" hover overlay */
  const overlay = document.getElementById('upload-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.style.opacity = '0';
  }

  console.log('[photo.js] Profile photo set successfully.');
}

/* ── Run automatically on page load ──────────────────────── */
document.addEventListener('DOMContentLoaded', setProfilePhoto);