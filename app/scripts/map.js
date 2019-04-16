/* eslint-disable */

'use strict';

ymaps.ready(init);

function init() {
  const mapCenter = [55.728903, 37.657911];
  const mapElement = document.getElementById('map');
  const mapOptions = {
    center: mapCenter,
    zoom: 9,
    controls: [],
  };

  const map = new ymaps.Map(mapElement, mapOptions);

  const fullscreenControlObject = new ymaps.control.FullscreenControl({
    options: {
      position: {
        top: 10,
        right: 10,
      },
    },
  });

  const zoomControlObject = new ymaps.control.ZoomControl({
    options: {
      position: {
        top: 10,
        left: 10,
      },
      size: 'small',
    },
  });

  map.controls.add(zoomControlObject);
  map.controls.add(fullscreenControlObject);
  map.behaviors.disable('scrollZoom');
}
