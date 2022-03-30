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
