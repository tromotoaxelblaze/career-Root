/*
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
*/

const hero = document.querySelector(".hero");

if (hero) {

  const images = [
    "images/poster1.jpg",
    "images/poster2.jpg",
    "images/poster3.jpg",
    "images/Poster11.webp"
  ];

  // Preload images (no flicker)
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let i = 0;

  function slider() {
    hero.classList.add("fade");

    setTimeout(() => {
      hero.style.backgroundImage = `url(${images[i]})`;
      i = (i + 1) % images.length;
      hero.classList.remove("fade");
    }, 400);
  }

  // Start slider
  slider();
  setInterval(slider, 4000);
}