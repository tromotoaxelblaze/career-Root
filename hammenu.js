//hamburger menu
const btn = document.querySelector('.hamburger');
const nav = document.getElementById('main-nav');

btn.addEventListener('click', () => {
  const isOpen = btn.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  const email = form.querySelector('input[name="email"]').value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  if (!emailPattern.test(email)) {
    e.preventDefault();
    alert("Please enter a valid email address");
  }
});