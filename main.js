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

// setup scroll button
let scrollBtn = document.querySelector('.scroll-btn');
document.addEventListener('scroll', () => {
  if(window.scrollY > 1000) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});
scrollBtn.addEventListener('click', () => window.scroll(0, 0));