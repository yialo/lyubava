'use strict';

// Select elements

const headerNavigation = document
  .querySelector('.header-navigation');
const headerCatalogButton = headerNavigation
  .querySelector('.dropdown-button');

// Classnames

const menuExpanded = 'is-menu-expanded';
const buttonTargetExpanded = 'is-target-expanded';

// Button click handler

const onCatalogButtonClick = function catalogButtonClickHandler() {
  headerNavigation.classList.toggle(menuExpanded);
  headerCatalogButton.classList.toggle(buttonTargetExpanded);
};

// Click listener

headerCatalogButton.addEventListener('click', () => {
  onCatalogButtonClick();
});
