$(function () {
  $('.slider__preview').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
    // autoplay: true,

    responsive: [{
      breakpoint: 971,
      settings: {
        arrows: false,
        dots: true,
      }
    }, ]
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
    $('.basket').removeClass('basket--active')
    $('body').removeClass('body--active')
  });

  $('.header__catalog-btn').on('click', function () {
    $('.header__list').toggleClass('header__list--active')
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
    $('.basket').toggleClass('basket--active')
    $('body').toggleClass('body--active')
  });

  $('.services__card').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.services__card:hidden').slice(0, 4).slideDown()
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})