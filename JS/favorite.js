import {blockRender, render} from "./render.js"

const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");

const socks = JSON.parse(localStorage.getItem("socks"));
console.log(socks);

let filteredSocks = [];

socks.forEach((item) => {
    if (item.cart == true) {
        filteredSocks.push(item);
    }
})

console.log(filteredSocks)
blockRender(filteredSocks, blocks);
