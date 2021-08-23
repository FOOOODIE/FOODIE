'use strict';
let item = [];

let Cart = function(name, price){
  this.name = name;
  this.price = price;
  // this.quantity = quantity;
  this.tax = 16;
  item.push(this);
  saveToLocalStorage();
  console.log(item);
};

function saveToLocalStorage (){
  let StringItem = JSON.stringify(item);
  localStorage.setItem('cart',StringItem);
};
function readFromLocalStorage() {
  let stringObj = localStorage.getItem('cart');
  let normalObj = JSON.parse(stringObj);
console.log(normalObj);
  if (normalObj) {
    item.push(normalObj);
    console.log(item);
    // showResults();
  }
}
readFromLocalStorage();

