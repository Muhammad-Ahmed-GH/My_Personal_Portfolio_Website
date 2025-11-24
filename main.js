// menu toggle button
let menuBtn = document.querySelector("nav .bars");
menuBtn.onclick = () => menuBtn.closest("nav").classList.toggle("open");

// set wavy class name
let sections = document.querySelectorAll("body > section:not(.landing)");
sections.forEach((section) => {
  section.classList.add("wavy");
});
let footer = document.querySelector("body > footer");
footer.classList.add("wavy");