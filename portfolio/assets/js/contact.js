/* ============================================================
   contact.js — Contact Form Submission Handler
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('RReSApe-TkLEt4zUB');
});
/* ----- Public submit function (called by the button) ----- */
function submitForm() {
  const firstName = document.getElementById('ff')?.value.trim();
  const lastName  = document.getElementById('fl')?.value.trim();
  const email     = document.getElementById('fe')?.value.trim();
  const subject   = document.getElementById('fs')?.value;
  const message   = document.getElementById('fm')?.value.trim();

  /* Validation */
  const errors = [];
  if (!firstName) errors.push('ff');
  if (!email)     errors.push('fe');
  if (!message)   errors.push('fm');

  if (errors.length > 0) {
    _shakeFields(errors);
    return;
  }

  if (!_isValidEmail(email)) {
    _shakeFields(['fe']);
    return;
  }

  /* Submit */
  const btn = document.getElementById('btn-send');
  _setLoading(btn, true);

  const payload = { firstName, lastName, email, subject, message };

  _sendViaBackend(payload)
    .then(() => {
      _resetForm();
      _showSuccess();
    })
    .catch((err) => {
      console.error('[contact.js] Submission error:', err);
      alert('There was a problem sending your message. Please try again or email directly.');
    })
    .finally(() => {
      _setLoading(btn, false);
    });
}

/* ----- Private Helpers ----- */

function _isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function _shakeFields(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.borderColor = 'rgba(220, 80, 80, 0.6)';
    el.style.animation   = 'shake 0.35s ease';
    setTimeout(() => {
      el.style.borderColor = '';
      el.style.animation   = '';
    }, 500);
  });
}

function _setLoading(btn, loading) {
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? '<span style="opacity:0.7">Sending...</span>'
    : '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg> Send Message';
}

function _resetForm() {
  ['ff', 'fl', 'fe', 'fm'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const sel = document.getElementById('fs');
  if (sel) sel.value = '';
}

function _showSuccess() {
  const el = document.getElementById('fsuccess');
  if (!el) return;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 6000);
}

/**
 * Send the form data via EmailJS.
 * ─────────────────────────────────────────────────
 *   1. Sign up at emailjs.com
 *   2. Create a service + template
 *   3. Replace the 3 placeholders below
 * ─────────────────────────────────────────────────
 *
 * @param {Object} payload
 * @returns {Promise}
 */
async function _sendViaBackend(payload) {
  const templateParams = {
    from_name  : `${payload.firstName} ${payload.lastName}`,
    from_email : payload.email,
    subject    : payload.subject,
    message    : payload.message,
  };

  return emailjs.send(
  'service_lrzo5kc',
  'template_sfcs55p',  // ← updated
  templateParams
);
} 