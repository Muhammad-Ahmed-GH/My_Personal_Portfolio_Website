let root = document.documentElement;

// setting page theme color
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDark.matches) {
  root.classList.add('dark');
} else {
  root.classList.toggle('dark', false);
}

// menu toggle button
let menuBtn = document.querySelector('nav .bars');
menuBtn.onclick = function () {
  if (this.parentElement.classList.contains('open')) {
    this.parentElement.classList.remove('open');
  } else {
    this.parentElement.classList.add('open');
  }
};