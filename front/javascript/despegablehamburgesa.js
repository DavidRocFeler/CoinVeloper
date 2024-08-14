document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('#encavezado-enlaces nav ul');
  
    hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  });