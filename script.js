let root = document.documentElement;

// control color theme
let media = window.matchMedia('(prefers-color-scheme: dark)');
if (media.matches)
  root.classList.add('dark');
media.onchange = () => root.classList.toggle('dark');

// menu toggle button
let menuBtn = document.querySelector('nav .bars');
menuBtn.onclick = () => menuBtn.closest('nav').classList.toggle('open');