//СлайдШоу


let count = 1;

let slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
  //Счетчик переключения страницы
  count += 1;
  if (count > 3) {
    count = 1;
  }
  click.innerHTML =  count;
}
function minusSlides(n) {
  showSlides(slideIndex -= n);
  //Счетчик переключения страницы
  count -= 1;
  if (count < 1) {
    count = 3;
  }
  click.innerHTML = count;
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let lines = document.getElementsByClassName("line");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < lines.length; i++) {
      lines[i].className = lines[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  lines[slideIndex-1].className += " active";
}





// let click = document.getElementById("click");

// let next = document.getElementById("next");
// let prev = document.getElementById("prev");
// next.onclick = function() {
//   count += 1;
//   click.innerHTML =  count;
//   console.log(click)
// };
// prev.onclick = function() {
//   count -= 1;
//   click.innerHTML =  count;
  
// };