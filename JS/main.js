import {blockRender, render} from "./render.js"
import {addLikes, addCart} from "./addCartLikes.js"

// Отрисовать корзину и лайки
document.querySelector(".like-and-cart__like-count").innerHTML=localStorage.getItem("likes")
document.querySelector(".like-and-cart__cart-count").innerHTML=JSON.parse(localStorage.getItem("cartItems"))

console.log(localStorage.getItem("likes"))

// Взятие носков с параметрами
const socks = JSON.parse(localStorage.getItem("socks"));





// ОСНОВНОЙ div для записи блоков
const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");

blockRender(socks, blocks); // Рендер Блоков в div


addLikes(socks); // Функция для кнопки "Добавление в Favorite"
addCart(socks);  // Функция для кнопки "Добавление в Cart"


export {blocks}