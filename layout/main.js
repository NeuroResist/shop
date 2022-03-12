import {slider} from "./slider.js"
import {blockRender} from "./render.js"


// Взятие носков с параметрами
const socks = JSON.parse(localStorage.getItem("socks"));

const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");

const firstEight = socks.slice(0,4);
const remaining = socks.slice(4,socks.length+1);
console.log(firstEight)
console.log(remaining)






//slider();
blockRender(firstEight, blocks);

const show = document.querySelector(".show-more__button");
show.onclick=()=>{
    blockRender(remaining, blocks);
    show.style.display = "none"
}