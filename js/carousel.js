let slideIndex = 1;
showSlides(slideIndex, "projmySlides");
showSlides(slideIndex, "mySlides");

// Next/previous controls
function plusSlides(n, name) {
  showSlides((slideIndex += n), name);
}

// Thumbnail image controls
function currentSlide(n, name) {
  showSlides((slideIndex = n), name);
}

function showSlides(n, name) {
  let i;
  let slides = document.getElementsByClassName(name);
  let dots = document.getElementsByClassName("dot" + "-" + name);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
