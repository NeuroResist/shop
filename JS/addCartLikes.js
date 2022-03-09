const socks = JSON.parse(localStorage.getItem("socks"));



const addLikes = ()=>{
    let likes = JSON.parse(localStorage.getItem("likes"));
    document.querySelectorAll(".favorite").forEach((item, i) => {
            item.addEventListener("click", () => {
            if (!socks[i].like) {
                item.setAttribute("src", "img/heart/red_heart.svg")
                socks[i].like = true;
                likes++;
                localStorage.setItem("likes",JSON.stringify(likes));
            } else {
                item.setAttribute("src", "img/heart/black_heart.svg")
                socks[i].like = false;
                likes--;
                localStorage.setItem("likes",JSON.stringify(likes));
            }
            document.querySelector(".like-and-cart__like-count").innerText = likes;
            localStorage.setItem("socks",JSON.stringify(socks));
            console.log(likes);
        })
    })

}

const addCart = ()=>{
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    document.querySelectorAll(".buy-button").forEach((item, i) => {
        console.log(item)
            item.addEventListener("click", () => {
            if (!socks[i].cart) {
                socks[i].cart = true;
                cartItems++;
                localStorage.setItem("cartItems",JSON.stringify(cartItems));
                item.innerText = "Из корзины";
            } else {
                socks[i].cart = false;
                cartItems--;
                localStorage.setItem("cartItems",JSON.stringify(cartItems));
                item.innerText = "В корзину";
            }
            document.querySelector(".like-and-cart__cart-count").innerText = cartItems;
                localStorage.setItem("socks",JSON.stringify(socks));
                console.log(cartItems);
        })
    })
}




export {addLikes, addCart};