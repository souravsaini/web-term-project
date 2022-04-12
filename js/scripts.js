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
      let headerOffset = 95;

      var elementPosition = element.getBoundingClientRect().top;
      if (window.innerWidth < 992 && window.innerWidth > 575) {
        headerOffset = 118;
      }
      if (window.innerWidth <= 576) {
        headerOffset = 82;
      }
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // element.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    //close mobile nav
    if (link.classList.contains("sublink")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});
