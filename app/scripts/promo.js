/* eslint-disable */

$(document).ready(function () {
  const slickSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    fade: false,
  };

  $('.promo__list').slick(slickSettings);
});
