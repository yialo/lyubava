'use strict';

const KEYCODE_ESC = 27;

const cityLocator = document.querySelector('.city-locator');
const cityLocatorControl = cityLocator.querySelector('.city-locator__field');
const cityLocatorInput = cityLocatorControl
  .querySelector('.city-locator__input');
const cityLocatorItems = cityLocator.querySelectorAll('.city-locator__link');

const cityListDropped = 'is-visible_city-locator__dropdown';

const toggleList = function toggleCityListVisibility(evtProp) {
  evtProp.preventDefault();
  cityLocator.classList.toggle(cityListDropped);
};

const selectCity = function cityLoctatorItemClickHandler(evtProp, item) {
  evtProp.preventDefault();
  const cityName = item.textContent;
  cityLocatorInput.value = cityName;
};

cityLocatorControl.addEventListener('click', (evt) => {
  toggleList(evt);
});

cityLocatorItems.forEach((listItem) => {
  listItem.addEventListener('click', (evt) => {
    selectCity(evt, listItem);
    cityLocator.classList.remove(cityListDropped);
  });
});

window.addEventListener('keydown', (evt) => {
  if (
    evt.keyCode === KEYCODE_ESC && cityLocator
      .classList.contains(cityListDropped)
  ) {
    toggleList(evt);
  }
});
