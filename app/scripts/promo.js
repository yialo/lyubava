/* eslint-disable */

$(document).ready(function () {
  const slickSettings = {
    arrows: false,
    appendDots: $('#slick-dots-host'),
    autoplay: true,
    dots: true,
    fade: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1000,
  };

  $('.promo__list').slick(slickSettings);
});
