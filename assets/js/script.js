"use strict";


//---add event listener on multiple elements
const addEventOnElement = function (elements, eventType, callback) {
  if (elements && elements.length > 0) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
};

//---navbar toggle for mobile
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


// active header when windows scroll down to 100px

const header = document.querySelector("[data-header]")


window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    header.classList.add("active")
  }else{
    header.classList.remove("active")
  }
})


// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");



const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}


window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
