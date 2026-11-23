// Mobile navigation
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

// Current year in footer
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

// Contact form (Formspree)
// Setup: create a form at https://formspree.io, then replace YOUR_FORM_ID
// in the form's action attribute on contact.html with your form ID.
const form = document.getElementById('contactForm');
if (form) {
  const status = document.getElementById('formStatus');
  const button = form.querySelector('button[type="submit"]');
  const show = (type, msg) => { status.className = 'form-status ' + type; status.textContent = msg; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('YOUR_FORM_ID')) {
      show('err', 'The contact form is not connected yet. Please email us at info@aadhyaassociates.com.');
      return;
    }
    button.disabled = true;
    const original = button.innerHTML;
    button.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.reset();
        show('ok', 'Thank you. Your message has been received, and we will reply within one business day.');
      } else {
        show('err', 'Sorry, your message could not be sent. Please try again or email info@aadhyaassociates.com.');
      }
    } catch (err) {
      show('err', 'Sorry, your message could not be sent. Please check your connection or email info@aadhyaassociates.com.');
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  });
}
