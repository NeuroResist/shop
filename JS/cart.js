import {blockRender, render} from "./render.js"
import {addLikes, addCart} from "./addCartLikes.js"
import {totalRender} from "./cartGenerator.js"
import {cross, cartTotalItems, totalPrice} from "./cartTotal.js"

// Отрисовать корзину и лайки
document.querySelector(".like-and-cart__like-count").innerHTML=JSON.parse(localStorage.getItem("likes"))
document.querySelector(".like-and-cart__cart-count").innerHTML=JSON.parse(localStorage.getItem("cartItems"))

// Взятие носков с параметрами
const socks = JSON.parse(localStorage.getItem("socks"));





// ОСНОВНОЙ div для записи блоков
const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");

let filtered = [];
socks.forEach((item)=>{
    if(item.cart == true) {
        filtered.push(item);
    }
})
const total = document.querySelector(".total");

totalRender(filtered, total) // Функция для рендера корзины

blockRender(filtered, blocks); // Рендер Блоков в div

addLikes(filtered); // Функция для кнопки "Добавление в Favorite"
addCart(filtered);  // Функция для кнопки "Добавление в Cart"
cross(filtered); // Функция отрисовки и onclick для Крестика
cartTotalItems(filtered) // Функция отрисовки Total
totalPrice();
export {blocks}