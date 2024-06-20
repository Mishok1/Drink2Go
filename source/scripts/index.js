/* в этот файл добавляет скрипты*/

const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--mobile-open');
  menuButton.classList.toggle('navigation__button--menu-open');
});
