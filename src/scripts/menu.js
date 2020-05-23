const hamBtn = document.querySelector('#hamBtn');
const hamClsBtn = document.querySelector('#hamClsBtn');
const hamMenu = document.querySelector('#hamMenu');

hamBtn.addEventListener('click', () => {
  hamMenu.classList.add('header__menu--active');
});

hamClsBtn.addEventListener('click', () => {
  hamMenu.classList.remove('header__menu--active');
});