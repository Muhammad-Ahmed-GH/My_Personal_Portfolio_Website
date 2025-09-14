function switchPageTheme() {
  if (darkButton.classList.contains('dark')) {
    darkButton.title = "switch to Dark Mode";
    darkButton.classList.toggle('dark', false);
    root.classList.toggle('dark', false);
  }
  else {
    darkButton.title = "switch to Light Mode";
    darkButton.classList.add('dark');
    root.classList.add('dark');
  }
}

function initPageTheme() {
  if (prefersDark.matches) {
    darkButton.classList.add('dark');
    darkButton.title = 'switch to Dark Mode';    
    root.classList.add('dark');
  }
  else {
    darkButton.classList.toggle('dark', false);
    darkButton.title = 'switch to Light Mode';
    root.classList.toggle('dark', false);
  }
}

let darkButton = document.querySelector('.dark-btn');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
let root = document.documentElement;

initPageTheme();
darkButton.addEventListener('click', switchPageTheme);
prefersDark.addEventListener('change', initPageTheme);