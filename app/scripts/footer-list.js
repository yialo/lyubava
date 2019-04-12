'use strict';

const setFooterListener = function createFooterListEventListener(element) {
  const elementControl = element.querySelector('.footer-list__dropdown');
  elementControl.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.classList.toggle('is-expanded_footer-list__content');
  });
};

const footerLists = document.querySelectorAll('.footer-list');

footerLists.forEach((item) => {
  setFooterListener(item);
});
