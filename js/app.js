"use strict";
let item = [];

let Cart = function (name, price, img) {
  this.name = name;
  this.price = price;
  this.img = img;
  this.tax = 16;
  item.push(this);
  saveToLocalStorage();
};

function saveToLocalStorage() {
  let StringItem = JSON.stringify(item);
  localStorage.setItem("cart", StringItem);
}
function getFromLocalStorage() {
  let data = localStorage.getItem("cart");
  if (data) {
    item = JSON.parse(data);
  }
}
getFromLocalStorage();
