"use strict";
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let addToCartButtons = document.querySelectorAll(".column");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("submit", addToCartClicked);
  }
}
ready();

let data = [
  {
    id: "1",
    name: "signature Burger",
    price: "6",
    img: "https://images.deliveryhero.io/image/talabat/menuitems/The_BIGt_637170312011988711.jpg",
  },
  {
    id: "2",
    name: "Patty",
    price: "5.5",
    img: "img/The Roadhouse Killer Burger.jpg",
  },
  {
    id: "3",
    name: "Double Cheese Burger",
    price: "5",
    img: "img/double cheese burger.jpg",
  },
  { id: "4", name: "Chicken Burger", price: "4.5", img: "img/Spicy Ch'King Sandwich.png" },
  { id: "5", name: " Mixed Meal", price: "7", img: "img/Mix n’ Match Meals.png" },
  { id: "6", name: "Beef Burger", price: "5", img: "img/Whopper.png" },
  { id: "7", name: "Butter Chicken", price: "5", img: "img/Butter-Chicken.jpg" },
  { id: "8", name: "Chicken Curry", price: "5", img: "img/Chicken-Curry.jpg" },
  { id: "9", name: "Chicken Masala", price: "5", img: "img/Masalaaa.jpg" },
  { id: "10", name: "Cheese Pizza", price: "5.5", img: "img/pizza1.jpeg" },
  { id: "11", name: "PIZZA FITNESS FAN", price: "5.5", img: "img/pizza2.jpeg" },
  { id: "12", name: "PEPPERONI PARTY", price: "6.5", img: "img/pizza3.jpeg" },
  { id: "13", name: "Spicy Biryani", price: "5", img: "img/Redberyahi.jpg" },
  { id: "14", name: "Biryani", price: "5", img: "img/beryahni.jpg" },
  { id: "15", name: "Chicken Tikka", price: "5", img: "img/chickenTikka.jpg" },
  { id: "16", name: "Big Mac Beef", price: "5", img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg?$Product_Desktop$" },
  { id: "17", name: "Big Mac Chicken", price: "4.5", img: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/640x481/gallery-1496334642-a328906030043c245002b032465f18db.jpg?resize=480:*" },
  { id: "18", name: "McChicken", price: "3", img: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McChicken.jpg?$Product_Desktop$" },
  { id: "19", name: "name", price: "prive", img: "link" },
  { id: "20", name: "name", price: "prive", img: "link" },
  { id: "21", name: "name", price: "prive", img: "link" },
  { id: "22", name: "name", price: "prive", img: "link" },
  { id: "23", name: "name", price: "prive", img: "link" },
  { id: "24", name: "name", price: "prive", img: "link" },
  { id: "25", name: "name", price: "prive", img: "link" },
  { id: "26", name: "name", price: "prive", img: "link" },
  { id: "27", name: "name", price: "prive", img: "link" },
  { id: "28", name: "name", price: "prive", img: "link" },
  { id: "29", name: "name", price: "prive", img: "link" },
  { id: "30", name: "name", price: "prive", img: "link" },
  { id: "31", name: "name", price: "prive", img: "link" },
  { id: "32", name: "name", price: "prive", img: "link" },
  { id: "33", name: "name", price: "prive", img: "link" },
  { id: "34", name: "name", price: "prive", img: "link" },
  { id: "35", name: "name", price: "prive", img: "link" },
  { id: "36", name: "name", price: "prive", img: "link" },
  { id: "37", name: "name", price: "prive", img: "link" },
  { id: "38", name: "name", price: "prive", img: "link" },
  { id: "39", name: "name", price: "prive", img: "link" },
  { id: "40", name: "name", price: "prive", img: "link" },
  { id: "41", name: "name", price: "prive", img: "link" },
  { id: "42", name: "name", price: "prive", img: "link" },
];

function addToCartClicked(event) {
  event.preventDefault();
  let idItem = event.target.childNodes[7].id;
console.log(idItem);
  new Cart(data[idItem].name, data[idItem].price, data[idItem].img);

  getFromLocalStorage();
  console.log(item);
}
// function addItemToCart(title, price) {
//   new Cart(title, price);

// }
getFromLocalStorage();

console.log(item);
