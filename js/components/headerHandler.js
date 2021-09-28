const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

const menu = document.querySelector('.header__navigation');
const menuElement = document.querySelectorAll('.header__navigation__element');
const menuTitle = document.querySelectorAll('.header__navigation__title');
const menuList = document.querySelectorAll('.header__navigation__list');

const info = document.querySelector('.header__info');
const infoButton = document.querySelector('.header__info__button');
const infoContainer = document.querySelector('.header__info__container');

const header = document.querySelector('header');

function replaceIcon() {
  hamburger.classList.toggle('hidden');
  close.classList.toggle('active');
}

function revealMenu() {
  menu.classList.toggle('active');
  info.classList.toggle('active');
}

function changeColors() {
  header.classList.toggle('active');
}

function revealInfo() {
  infoButton.classList.toggle('active');
  infoContainer.classList.toggle('active');
}

function removeClassOnResize() {
  if (window.innerWidth >= 992) {
    infoButton.classList.remove('active');
    infoContainer.classList.remove('active');

    menuList.forEach((list) => {
      list.classList.remove('active');
    });
  }
}

hamburger.addEventListener('click', () => {
  replaceIcon();
  revealMenu();
  changeColors();
});

close.addEventListener('click', () => {
  replaceIcon();
  revealMenu();
  changeColors();
});

infoButton.addEventListener('click', () => {
  revealInfo();
});

window.addEventListener('resize', () => {
  removeClassOnResize();
});

menuTitle.forEach((title) => {
  title.addEventListener('click', () => {
    if (!title.nextElementSibling.classList.contains('active')) {
      menuList.forEach((list) => {
        list.classList.remove('active');
      });

      title.nextElementSibling.classList.toggle('active');
    } else {
      title.nextElementSibling.classList.remove('active');
    }
  });
});
