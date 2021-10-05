$(function () {
  $('.slider__preview').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slicks slicks-prev"></button>',
    nextArrow: '<button type="button" class="slicks slicks-next"></button>',
    autoplay: true,

    responsive: [{
      breakpoint: 971,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
      }
    }, ]
  });

  $('.brands__list').slick({
    infinite: true,
    slidesToShow: 6,
    variableWidth: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [{
      breakpoint: 971,
      settings: {
        slidesToShow: 2,
      }
    }, ]
  });


  $('.slide__btn').on('click', function () {
    $('.slide__menu').toggleClass('slide__menu-active')
    $('body').toggleClass('body-active')
  });

  $('.category__btn').on('click', function () {
    $('.services__card').removeClass('image--hidden')
  });

  $('.slide__close').on('click', function () {
    $('.slide__menu').removeClass('slide__menu-active')
    $('body').removeClass('body-active')
  });

  $('.basket__close').on('click', function () {
    $('.basket').removeClass('basket-active')
    $('body').removeClass('body-active')
  });

  $('.header__catalog-btn').on('click', function () {
    $('.header__list').toggleClass('header__list-active')
  });

  $('.header-search__btn').on('click', function () {
    $('.header__form').toggleClass('header__form-active')
    $('.header__search').toggleClass('header__search-active')
    $('.header__btn').toggleClass('header__btn-active')
  });

  $('.header__catalog-btn').on('click', function () {
    $('.header__catalog-btn').toggleClass('header__catalog-btn-active')
  });

  $('.header__button').on('click', function () {
    $('.basket').toggleClass('basket-active')
    $('body').toggleClass('body-active')
  });

  $('.services__card').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.services__card:hidden').slice(0, 4).slideDown()
  });

  const productsBtn = document.querySelectorAll('.price__btn');
  const cartProductsList = document.querySelector('.basket__items');
  const cart = document.querySelector('.basket');
  const cartQuantity = cart.querySelector('.amount');
  const fullPrice = document.querySelector('.basket__price');
  let price = 0;

  const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const priceWithoutSpaces = (str) => {
    return str.replace(/\s/g, '');
  };

  const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  };

  const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
  };

  const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
  };

  const printQuantity = () => {
    let productsListLength = cartProductsList.querySelector('.basket__item').children.length;
    cartQuantity.textContent = productsListLength;
    productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`;
  };

  const generateCartProduct = (img, title, price, id) => {
    return `
		<li class="basket__item" >
      <div class="basket__wrapper"data-id="${id}">
         <div class="basket__info">
          <img class="basket__img" src="${img}" alt=Ананас"">
          <p class="basket__name">
             ${title}
            <span class="basket__cost">
             ${price}
            </span>
          </p>
        </div>
        <div class="goods__buy">
          <button class="goods__delete"></button>
          <div class="goods__amount">
            <button class="plus"></button>
            <p class="goods__number">1</p>
            <button class="minus"></button>
            <p class="goods__price">
              ${price}
            </p>
          </div>
        </div>
      </div>
    </li>
	`;
  };

  const deleteProducts = (productParent) => {
    let id = productParent.querySelector('.basket__items').dataset.id;
    document.querySelector(`.services__card[data-id="${id}"]`).querySelector('.price__btn').disabled = false;

    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();

    printQuantity();
  };

  productsBtn.forEach(el => {
    el.closest('.services__card').setAttribute('data-id', randomId());

    el.addEventListener('click', (e) => {
      let self = e.currentTarget;
      let parent = self.closest('.services__card');
      let id = parent.dataset.id;
      let img = parent.querySelector('.services__link img').getAttribute('src');
      let title = parent.querySelector('.services__title').textContent;
      let priceString = priceWithoutSpaces(parent.querySelector('.price__text').textContent);
      let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price__text').textContent));
      console.log(priceString)
      plusFullPrice(priceNumber);
      printFullPrice();
      cartProductsList.querySelector('.basket__item').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
      printQuantity();
      self.disabled = true;
    });
  });

  cartProductsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('goods__delete')) {
      deleteProducts(e.target.closest('.basket__item'));
    }
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