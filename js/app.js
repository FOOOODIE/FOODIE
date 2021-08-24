'use strict';
let item = [];

let Cart = function(name, price){
  this.name = name;
  this.price = price;
  // this.quantity = quantity;
  this.tax = 16;
  item.push(this);
  saveToLocalStorage();
};

function saveToLocalStorage (){
  let StringItem = JSON.stringify(item);
  localStorage.setItem('cart',StringItem);
};



