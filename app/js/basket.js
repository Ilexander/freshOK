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



// const productsBtn = document.querySelectorAll('.product__btn');
// const cartProductsList = document.querySelector('.cart-content__list');
// const cart = document.querySelector('.cart');
// const cartQuantity = cart.querySelector('.cart__quantity');
// const fullPrice = document.querySelector('.fullprice');
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

// const plusFullPrice = (currentPrice) => {
//   return price += currentPrice;
// };

// const minusFullPrice = (currentPrice) => {
//   return price -= currentPrice;
// };



// const printFullPrice = () => {
//   fullPrice.textContent = `${normalPrice(price)} ₽`;
// };

// const generateCartProduct = (img, title, price, id) => {
//   return `
// 		<li class="cart-content__item">
// 			<article class="cart-content__product cart-product" data-id="${id}">
// 				<img src="${img}" alt="" class="cart-product__img">
// 				<div class="cart-product__text">
// 					<h3 class="cart-product__title">${title}</h3>
// 					<span class="cart-product__price">${normalPrice(price)}</span>
// 				</div>
// 				<button class="cart-product__delete" aria-label="Удалить товар"></button>
// 			</article>
// 		</li>
// 	`;
// };

// const deleteProducts = (productParent) => {
//   let id = productParent.querySelector('.cart-product').dataset.id;
//   document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

//   let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
//   minusFullPrice(currentPrice);
//   printFullPrice();
//   productParent.remove();

//   printQuantity();
// };

// productsBtn.forEach(el => {
//   el.closest('.product').setAttribute('data-id', randomId());

//   el.addEventListener('click', (e) => {
//     let self = e.currentTarget;
//     let parent = self.closest('.product');
//     let id = parent.dataset.id;
//     let img = parent.querySelector('.image-switch__img img').getAttribute('src');
//     let title = parent.querySelector('.product__title').textContent;
//     let priceString = priceWithoutSpaces(parent.querySelector('.product-price__current').textContent);
//     let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-price__current').textContent));

//     plusFullPrice(priceNumber);

//     printFullPrice();

//     cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
//     printQuantity();


//     self.disabled = true;
//   });
// });

// cartProductsList.addEventListener('click', (e) => {
//   if (e.target.classList.contains('cart-product__delete')) {
//     deleteProducts(e.target.closest('.cart-content__item'));
//   }
// });