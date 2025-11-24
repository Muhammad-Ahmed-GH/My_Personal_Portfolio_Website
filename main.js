// menu toggle button
let menuBtn = document.querySelector("nav .bars");
menuBtn.onclick = () => menuBtn.closest("nav").classList.toggle("open");

// set wavy class name
let sections = document.querySelectorAll("body > :not(script):not(header)");
sections.forEach((section) => {
  if (!section.classList.contains("landing")) {
    section.classList.add("wavy");
  }
});