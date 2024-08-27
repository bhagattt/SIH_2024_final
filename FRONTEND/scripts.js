const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

document.querySelector(".prev-btn").addEventListener("click", () => {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  slider.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector(".next-btn").addEventListener("click", () => {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  slider.style.transform = `translateX(${-index * 100}%)`;
});
