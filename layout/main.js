import {slider} from "./slider.js"
import {blockRender} from "./render.js"


// Взятие носков с параметрами
const socks = JSON.parse(localStorage.getItem("socks"));

const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");








slider();
blockRender(socks, blocks);

