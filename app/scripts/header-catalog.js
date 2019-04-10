'use strict';

// Select elements

const headerNavigation = document
  .querySelector('.header-navigation');
const headerCatalogButton = headerNavigation
  .querySelector('.dropdown-button');

// Classnames

const topCatalogMenuExpanded = 'is-menu-expanded';
const topCatalogButtonTargetExpanded = 'is-target-expanded';

// Button click handler

const onCatalogButtonClick = function catalogButtonClickHandler() {
  headerNavigation.classList.toggle(topCatalogMenuExpanded);
  headerCatalogButton.classList.toggle(topCatalogButtonTargetExpanded);
};

// Click listener

headerCatalogButton.addEventListener('click', () => {
  onCatalogButtonClick();
});
