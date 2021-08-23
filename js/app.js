'use strict';
let item = [];

let Cart = function(name, price){
  this.name = name;
  this.price = price;
  // this.quntety = quntety;
  this.tax = 16;
  item.push(this);
};
// Cart.prototype.addToCart = function(name, price){
// //   Cart(name, price);
//   this.saveToLocalStorage(item);
// };Cart.prototype.saveToLocalStorage = function(lestOfItem){
//   let StringItem = JSON.stringify(lestOfItem);
//   localStorage.setItem('cart',StringItem);
// };

new Cart('hi',20);
console.log(item);
