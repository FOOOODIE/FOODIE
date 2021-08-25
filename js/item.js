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

function quantityChanged() {
  let quantity =+1 ;
  return quantity;
 
}

function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  addItemToCart(title, price.split(' ')[0]);
}
let quantity
function addItemToCart(title, price) {
  // let quantity = quantityChanged();
  new Cart(title, price);
  
}
// function readFromLocalStorage() {
//   let stringObj = localStorage.getItem('cart');
//   let normalObj = JSON.parse(stringObj);

//   if (normalObj) {
//     item.push(normalObj);

//     // showResults();
//   }
// }
// readFromLocalStorage();