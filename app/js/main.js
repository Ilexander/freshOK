$(function () {
  $('.preview__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick-prev"><img src="images/prevarrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick__btn slick-next"><img src="images/nextarrow.svg" alt=""></button>',
    autoplay: true
  });

  // const priceBtn = document.querySelectorAll('.price__btn');
  // const servicesImages = document.querySelector('.services__images');
  // const navigationBtn = document.querySelector('.navigation__btn');
  // const basket__bottom = document.querySelector('.basket__bottom');
  // const basket__price = document.querySelector('.basket__price');

  // let price = 0;

  // const randomId = () => {
  //   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  // };

  // const priceWithoutSpaces = (str) => {
  //   return str.replace(/\s/g, '');
  // };

  // const normalPrice = (str) => {
  //   return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  // };

  // const generateCartProduct = (img, title, price, id) => {
  //   return `
  //   < li class = "services__image mix category-fruits" data-id = "${id}">
  //     <
  //     div class = "services__link-inner " >
  //     <
  //     div class = "services__items" >
  //     <
  //     p class = "services__sale sale--new" > Новинка < /p> <
  //     p class = "services__sale sale--discount" > -50 % < /p> <
  //     /div> <
  //     button class = "services__favorites" > < img src = "images/heart.svg"
  //   alt = "" > < /button> <
  //     /div> <
  //     a class = "services__link"
  //   href = "#" >
  //     <
  //     img src = "${img}"
  //   alt = "" >
  //     <
  //     /a> <
  //     h4 class = "services__image-title" >${title}< /h4> <
  //     div class = "price__purchase" >
  //     <
  //     div class = "price__cost" >
  //     <
  //     p class = "price__sale" > ${price}₽ < /p> <
  //     p class = "price__text" > ${price}₽ < /p> <
  //     /div> <
  //     button class = "price__btn" > < img src = "images/cart-btn.svg"
  //   alt = "" > < /button> <
  //     /div> <
  //     /li> 


  //   `;
  // }


  $('.category__btn').on('click', function () {
    $('.services__card').removeClass('image--hidden')
  });

  $('.basket__close-btn').on('click', function () {
    $('.header__basket').removeClass('header__basket--active')
     $('body').removeClass('body--active')
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active')
  });

  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').toggleClass('catalog__btn--active')
  });

  $('.navigation__btn').on('click', function () {
    $('.header__basket').toggleClass('header__basket--active')
    $('body').toggleClass('body--active')
  });

  $('.services__card').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.services__card:hidden').slice(0, 4).slideDown()
  });


  var mixer = mixitup('.services__items');
})