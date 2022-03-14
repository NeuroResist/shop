import {slider} from "./slider.js"
import {blockRender} from "./render.js"


// Взятие носков с параметрами
const socks = JSON.parse(localStorage.getItem("socks"));

const blocks = document.createElement('div');
blocks.classList.add("center", "center__wrap", "main-block");

const firstEight = socks.slice(0, 4);
const remaining = socks.slice(4, socks.length + 1);
console.log(firstEight)
console.log(remaining)
//slider();




// Скрыть-раскрыть блоки
const show = document.querySelector(".show-more__button");
let isShowed = true;

blockRender(firstEight, blocks);
blockRender(remaining, blocks);

let child = blocks.childNodes;
child.forEach((item,i)=>{
    if(i>=4){
        child.item(i).style.display = "none";
    }
});

show.onclick = () => {
    if(isShowed){
        show.innerText = "Hide";
        isShowed=!isShowed;

        let child = blocks.childNodes;
        child.forEach((item,i)=>{
            if(i>=4){
                item.style.display = "block";
            }
        });


    } else {
        let child = blocks.childNodes;
        child.forEach((item,i)=>{
            if(i>=4){
                item.style.display = "none";
            }
        });
        show.innerText = "Show More";
        isShowed=!isShowed;
    }
}