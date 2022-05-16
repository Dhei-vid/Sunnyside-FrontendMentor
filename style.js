"use strict";

// Opening and closing mobile navigation
const nav_btn = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

// removing the nav-open at the start
// headerEL.classList.remove("nav-open");

nav_btn.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// Implementing smooth scroll
// console.log(allLinks);

allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scrolling to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile navigation
    const links = link.getAttribute("class");
    if (link.classList.contains("main-nav-link")) {
      headerEL.classList.remove("nav-open");
    }
  })
);
