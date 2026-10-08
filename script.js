const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');
const reservationForm = document.querySelector('.reservation-form');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = reservationForm.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Booked!';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      reservationForm.reset();
    }, 1800);
  });
}
