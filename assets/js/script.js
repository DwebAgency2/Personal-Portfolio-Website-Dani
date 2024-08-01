"use strict";

//---add event listener on multiple elements
const addEventOnElement = function (elements, eventType, callback) {
  if (elements && elements.length > 0) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
};

//---navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  if (navbar && overlay) {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
};

// Ensure that navTogglers is a NodeList and not empty
if (navTogglers.length > 0) {
  addEventOnElement(navTogglers, "click", toggleNavbar);
}
