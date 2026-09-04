(() => {
  'use strict';

  /* ---------- Header shadow on scroll ---------- */
  const header = document.querySelector('.header');
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  const closeMobileNav = () => {
    mobileNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openMobileNav = () => {
    mobileNav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  hamburger.addEventListener('click', () => {
    mobileNav.classList.contains('is-open') ? closeMobileNav() : openMobileNav();
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  /* ---------- Sector selector: reveals related services ---------- */
  const sectorCards = document.querySelectorAll('[data-sector-target]');
  sectorCards.forEach((card) => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-sector-target');
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Quote form: prefill service select from CTA buttons ---------- */
  const serviceSelect = document.getElementById('servicio');
  document.querySelectorAll('[data-service]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-service');
      if (serviceSelect && value) {
        serviceSelect.value = value;
      }
    });
  });

  /* ---------- File upload preview ---------- */
  const fileInput = document.getElementById('fotos');
  const fileDrop = document.getElementById('file-drop');
  const fileList = document.getElementById('file-list');

  if (fileInput && fileDrop && fileList) {
    fileInput.addEventListener('change', () => {
      const files = Array.from(fileInput.files || []);
      fileList.innerHTML = '';
      if (files.length) {
        fileDrop.classList.add('has-files');
        const names = files.map((f) => f.name).join(', ');
        fileList.textContent = `${files.length} archivo(s) seleccionado(s): ${names}`;
      } else {
        fileDrop.classList.remove('has-files');
        fileList.textContent = '';
      }
    });
  }

  /* ---------- Quote form submit (client-side handling) ----------
     This is a static site with no backend. On submit we validate,
     show a confirmation message, and reset the form. To receive
     real submissions, connect this <form> to a form backend
     (Formspree, Netlify Forms, Google Forms, or a custom endpoint)
     as described in README.md. */
  const quoteForm = document.getElementById('quote-form');
  const formStatus = document.getElementById('form-status');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }

      formStatus.textContent =
        '¡Gracias! Recibimos tu solicitud. Uno de nuestros especialistas se pondrá en contacto contigo muy pronto.';
      formStatus.classList.remove('is-error');
      formStatus.classList.add('is-success');

      quoteForm.reset();
      if (fileDrop) fileDrop.classList.remove('has-files');
      if (fileList) fileList.textContent = '';
    });
  }

  /* ---------- Current year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
