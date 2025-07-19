window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});


const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
const navLinks = navList.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});