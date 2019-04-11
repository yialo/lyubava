'use strict';

// Select elements

const bodyHeader = document.querySelector('.body-header');
const menuControl = bodyHeader.querySelector('.menu-control');

// Classnames

const topNavbarVisible = 'is-visible_body-header__nest--top-menu';
const topNavbarButtonTargetVisible = 'is-target-visible';

// Button click handler

const onNavbarButtonClick = function topNavbarButtonClickHander() {
  bodyHeader.classList.toggle(topNavbarVisible);
  menuControl.classList.toggle(topNavbarButtonTargetVisible);
};

// Click listener

menuControl.addEventListener('click', () => {
  onNavbarButtonClick();
});
