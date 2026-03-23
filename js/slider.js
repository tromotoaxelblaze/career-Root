
// HERO AUTO SLIDER

const hero = document.querySelector(".hero");

const images = [
  "images/poster1.jpg",
  "images/poster2.jpg",
  "images/poster3.jpg",
  "images/poster4.jpg"
];

let i = 0;

function slider(){
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}


setInterval(slider, 4000);
slider();