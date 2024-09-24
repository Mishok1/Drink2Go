
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuButton.classList.toggle('navigation__button--open');
  menu.classList.toggle('menu--open');
});
