const gap2 = 16;

const carousel2 = document.querySelector(".carousel2"),
  content2 = document.querySelector(".content2"),
  next2 = document.querySelector(".next2"),
  prev2 = document.querySelector(".prev2");

next2.addEventListener("click", e => {
  carousel2.scrollBy(width + gap2, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width - gap2 <= carousel2.scrollLeft + width) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width + gap2), 0);
  if (carousel2.scrollLeft - width - gap2 <= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width - gap2 <= carousel2.scrollLeft + width) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));
