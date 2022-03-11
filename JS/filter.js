import {blockRender} from "./render.js"
import {blocks} from "./main.js"
import {addLikes, addCart} from "./addCartLikes.js"



// Отфильтрованные носки
let filteredSocks = [];




// Фильтр
const filter = document.querySelector("#select");
let filterType = "";
// Выбор фильтра, наговнокодил
filter.addEventListener("change", () => {
    if (filter.value === "like") {filterType="like"}
    if (filter.value === "cart") {filterType="cart"}
    if (filter.value === "none") {filterType="none"}
    if (filter.value === "color" || filter.value === "price") {
        if (filter.value === "color") {
            filterType = "color";
            document.querySelector(".filter_hidden").classList.add("filter");
            document.querySelector(".filter_hidden2").classList.remove("filter");
        } else if (filter.value == "price") {
            filterType = "price";
            document.querySelector(".filter_hidden").classList.add("filter");
            document.querySelector(".filter_hidden2").classList.add("filter");
        }
    } else {
        document.querySelector(".filter_hidden").classList.remove("filter");
        document.querySelector(".filter_hidden2").classList.remove("filter");
    }
})

// Взятие значение из input и выполнить поиск
const search = document.querySelector(".search");
let secondInput="";
search.addEventListener("click", () => {
    const socks = JSON.parse(localStorage.getItem("socks"));
    const firstInput = document.querySelector(".filter_hidden").value;

    // Color
    if (filterType == "color") {

        filteredSocks = socks.filter(sock => sock.name === firstInput) //используй фильтры

        // socks.forEach((item) => {
        //     if (item.name == firstInput) {
        //         filteredSocks.push(item);
        //     }
        // })
    }

    // Price
    if(filterType == "price") {
        // firstInput = document.querySelector(".filter_hidden").value;
        secondInput = document.querySelector(".filter_hidden2").value;

        // if(!firstInput){firstInput=0}
        if(!secondInput){secondInput=1000}

        !secondInput && (secondInput=1000)
        // console.log(+firstInput + "___" + +secondInput)

        socks.forEach((item)=>{
            if(item.price>=+firstInput && item.price<=+secondInput) {
                filteredSocks.push(item);
            }
        })
        // console.log(filteredSocks);
    }

    // Like
    if(filterType == "like"){
        socks.forEach((item)=>{
            if(item.like == true) {
                filteredSocks.push(item);
            }
        })
    }

    // Cart
    if(filterType == "cart"){
        socks.forEach((item)=>{
            if(item.cart == true) {
                filteredSocks.push(item);
            }
        })
    }

    // None
    if(filterType == "none"){
        filteredSocks = socks;
    }

    // Render

    if(document.querySelector(".main-block").hasChildNodes()){
        const children = document.querySelector(".main-block");
        while (children.firstChild) children.removeChild(children.firstChild);
    }
    // console.log(filteredSocks)
    blockRender(filteredSocks, blocks)
    addLikes(filteredSocks);
    addCart(filteredSocks);
    filteredSocks=[];
})


