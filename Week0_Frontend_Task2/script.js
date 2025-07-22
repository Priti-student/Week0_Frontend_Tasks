const themeBtn = document.getElementById('themeToggleBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark_theme');
  themeBtn.classList.toggle('ring-4'); 
});
document.getElementById('themeNavBtn').addEventListener('click', () => {
  themeBtn.click();
});
document.getElementById('themeNavBtnMobile').addEventListener('click', () => {
  themeBtn.click();
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY >100) {
  scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Your message has been sent!');
});
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');

counterBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = `You clicked ${count} times.`;
});
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobilePanel = document.getElementById('mobilePanel');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  setTimeout(() => {
    mobilePanel.classList.remove('-translate-x-full');
  }, 10);
});

navClose.addEventListener('click', () => {
  mobilePanel.classList.add('-translate-x-full');
  setTimeout(() => {
    mobileMenu.classList.add('hidden');
  }, 300);
});

mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    navClose.click();
  }
});
window.addEventListener('load', () => {
  setTimeout(() => {
    const welcomeScreen = document.getElementById('welcomeScreen');
    welcomeScreen.classList.add('opacity-0');
    setTimeout(() => {
      welcomeScreen.style.display = 'none';
    }, 500);
  }, 1500);
});
particlesJS('particles-js',
{
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 2 },
    "move": { "speed": 1 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }
    }
  }
});