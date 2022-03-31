const btnNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

//redirect to linked pages
const externalLinks = document.querySelectorAll(
  ".menu-link, .logo, .btn, .footer-link"
);
externalLinks.forEach((link) => {
  //close mobile nav
  if (link.classList.contains("menu-link")) {
    headerElement.classList.toggle("nav-open");
  }
});

//smooth scroll
const links = document.querySelectorAll(".sublink");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const element = document.querySelector(href);
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav
    if (link.classList.contains("sublink")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

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
