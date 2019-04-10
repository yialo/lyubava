'use strict';

const cityLocator = document.querySelector('.city-locator');
const cityLocatorControl = cityLocator.querySelector('.city-locator__field');
const cityLocatorInput = cityLocatorControl
  .querySelector('.city-locator__input');
const cityLocatorItems = cityLocator.querySelectorAll('.city-locator__link');

const cityListDropped = 'is-citylist-expanded';

cityLocatorControl.addEventListener('click', (evt) => {
  evt.preventDefault();
  cityLocator.classList.toggle(cityListDropped);
});

cityLocatorItems.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const cityName = item.textContent;
    cityLocatorInput.value = cityName;
  });
});
