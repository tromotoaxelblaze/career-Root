
// HERO AUTO SLIDER

const hero = document.querySelector(".hero");

const images = [
  "images/poster1.jpeg",
  "images/poster2.jpeg",
  "images/poster3.jpeg",
  "images/poster4.jpeg"
];

let i = 0;

function slider(){
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}

setInterval(slider, 4000);
slider();
