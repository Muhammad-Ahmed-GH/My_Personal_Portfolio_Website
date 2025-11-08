let root = document.documentElement;

let setTheme = function (isDark) {
  isDark ?
    root.classList.add('dark') :
    root.classList.remove('dark');
};

let media = window.matchMedia('(prefers-color-scheme: dark)');

setTheme(media.matches);

media.addEventListener('change', (e) => {
  setTheme(e.matches);
});


// menu toggle button
let menuBtn = document.querySelector('nav .bars');
menuBtn.onclick = function () {
  this.parentElement.classList.contains('open') ?
    this.parentElement.classList.remove('open') :
    this.parentElement.classList.add('open');
};