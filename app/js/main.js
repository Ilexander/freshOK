$(function () {
  $('.preview__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/prevarrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/nextarrow.svg" alt=""></button>',
    autoplay: true
  });
})