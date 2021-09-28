$(function () {
  $('.slider__preview').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/prevarrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/nextarrow.svg" alt=""></button>',
    // autoplay: true,

    responsive: [{
        breakpoint: 971,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });


  $('.category__btn').on('click', function () {
    $('.services__card').removeClass('image--hidden')
  });

  $('.menu__btn').on('click', function () {
    $('.slide__menu').toggleClass('slide__menu--active')
    $('body').toggleClass('body--active')
  });

  $('.slide__close').on('click', function () {
    $('.slide__menu').removeClass('slide__menu--active')
    $('body').removeClass('body--active')
  });

  $('.basket__close').on('click', function () {
    $('.header__basket').removeClass('header__basket--active')
    $('body').removeClass('body--active')
  });

  $('.header__catalog-btn').on('click', function () {
    $('.header__catalog-list').toggleClass('header__catalog-list--active')
  });

  $('.search__btn').on('click', function () {
    $('.header__form').toggleClass('header__form--active')
    $('.header__search').toggleClass('header__search--active')
    $('.header__btn').toggleClass('header__btn--active')
  });

  $('.header__catalog-btn').on('click', function () {
    $('.header__catalog-btn').toggleClass('header__catalog-btn--active')
  });

  $('.header__button').on('click', function () {
    $('.header__basket').toggleClass('header__basket--active')
    $('body').toggleClass('body--active')
  });

  $('.services__card').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.services__card:hidden').slice(0, 4).slideDown()
  });


  var mixer = mixitup('.services__cards');

  var mixer = mixitup('.stock__items');
})