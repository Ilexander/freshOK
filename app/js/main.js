$(function () {
  $('.preview__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/prevarrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/nextarrow.svg" alt=""></button>',
    autoplay: true
  });

  $('.services__category').on('click', function () {
    $('.services__image').removeClass('image--hidden')
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active')
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').toggleClass('catalog__btn--active')
  });

  $('.services__image').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.services__image:hidden').slice(0, 4).slideDown()
  });


  var mixer = mixitup('.services__images');
})