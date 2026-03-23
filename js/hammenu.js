//hamburger menu
const btn = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');

btn.addEventListener('click', () => {
  const isOpen = btn.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
});