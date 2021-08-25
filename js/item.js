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
  { id: "19", name: "Chicken Shawerma Sandwich", price: "4", img: "img/chicken shawerma mousalli.jpg" },
  { id: "20", name: "Beef Shawerma Sandwich", price: "4", img: "img/meat shawerma mousalli.jpg" },
  { id: "21", name: "Chicken Shawerma Kibbeh", price: "3", img: "img/chicken shawerma kibbeh mousalli.jpg" },
  { id: "22", name: "Pepperoni Pizza", price: "6.5", img: "img/paporoni neds pizza.jpg" },
  { id: "23", name: "Garlic Bread", price: "2.5", img: "img/garlic bread neds pizza.jpg" },
  { id: "24", name: "Meat Lover", price: "7", img: "img/meat pizza nedz.jpg" },
  { id: "25", name: "Pepperoni Pizza", price: "6.5", img: "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1525888155/photos/274698_original.jpg" },
  { id: "26", name: "Margherita Pizza", price: "5.5", img: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000450/img/basic/a0000450_main.jpg?20170429125322&q=80&rw=750&rh=536" },
  { id: "27", name: "Mixed Pizza", price: "6.5", img: "https://www.smartertravel.com/wp-content/uploads/2018/10/pizza.jpg" },
  { id: "28", name: "Margherita Pizza", price: "5", img: "img/MargPizza.jpg" },
  { id: "29", name: " Salmon Pizza", price: "7", img: "img/Salmon Pizza.jpg" },
  { id: "30", name: "Pepperoni Pizza", price: "6.5", img: "img/peppPizza.jpg" },
  { id: "31", name: "Topped Cheese Burger", price: " 6.5", img: "img/meal 1.jpeg" },
  { id: "32", name: "Crispy Chicken", price: "5", img: "img/meal2.jpeg" },
  { id: "33", name: "Mushroom Beef Burger", price: "5", img: "img/meal3.jpeg" },
  { id: "34", name: "Beef Biryani", price: "5", img: "img/bryani.jpeg" },
  { id: "35", name: "Chicken Masala", price: "5", img: "img/masala.jpeg" },
  { id: "36", name: "Chillie Chicken", price: "5", img: "img/ Chilli_Chicken .jpeg" },
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
