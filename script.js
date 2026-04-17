
// HERO AUTO SLIDER

const hero = document.querySelector(".hero");

const images = [
  "images/Slide1.jpg",
  "images/Slide2.jpg",
  "images/Slide3.jpg"
];

let i = 0;

function slider(){
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}

setInterval(slider, 4000);
slider();
