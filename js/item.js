'use strict';
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  let addToCartButtons = document.getElementsByClassName('add-to-cart');
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  }

}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  new Cart(title, price);
}

// function addItemToCart(title, price) {
//   let cartItems = document.getElementsByClassName('cart-items')[0];
//   let cartItemNames = cartItems.getElementsByClassName('cart-item-title');

// //   Cart.addToCart(title, price);

//   for (let i = 0; i < cartItemNames.length; i++) {
//     if (cartItemNames[i].innerText === title) {
//       alert('This item is already added to the cart');
//       return;
//     }
//   }
// }
