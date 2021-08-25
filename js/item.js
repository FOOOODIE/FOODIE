'use strict';
// if (document.readyState === 'loading') {
//   document.addEventListener('DOMContentLoaded', ready);
// } else {
//   ready();
// }

function ready() {
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
    
  }
}
ready()



function addToCartClicked(event) {
  console.log(event);
  // let button = event.target;
  // let shopItem = button.parentElement;
  // let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  // let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  // addItemToCart(title, price.split(' ')[0]);
  // console.log(`name : ${title}`, ` : ${price}`);
  // new Cart(title, price.split(' ')[0])
  // console.log(`all items :`,item);
}
// function addItemToCart(title, price) {
//   new Cart(title, price);
  
// }
