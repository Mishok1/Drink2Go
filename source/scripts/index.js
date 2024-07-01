// menuButton

const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--mobile-open');
  menuButton.classList.toggle('navigation__button--menu-open');
});


//slider

const buttonPrevious = document.querySelector('.slider__button-previous');
const buttonNext = document.querySelector('.slider__button-next');
