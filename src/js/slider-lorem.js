
const carousels = document.querySelectorAll(".header__item");
// loop through slides and set each slides translateX property to index * 100% 
carousels.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

// current slide counter
let curCarousel = 0;
let maxCarousel = carousels.length - 1;

// select next slide button
const nextCarousel = document.querySelector(".arrow_right");

// add event listener and next slide functionality
nextCarousel.addEventListener("click", function () {
    if (curCarousel === maxCarousel) {
        curCarousel = 0;
      } else {
        curCarousel++;
      }

  carousels.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curCarousel)}%)`;
  });
});

// select prev slide button
const prevCarousel = document.querySelector(".arrow_left");

// add event listener and navigation functionality
prevCarousel.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curCarousel === 0) {
    curCarousel = maxCarousel;
  } else {
    curCarousel--;
  }

  //   move slide by 100%
  carousels.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curCarousel)}%)`;
  });
});