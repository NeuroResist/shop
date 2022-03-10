


const addLikes = (filtered) => {
    let likes = JSON.parse(localStorage.getItem("likes"));
    let socks = JSON.parse(localStorage.getItem("socks"));

    document.querySelectorAll(".favorite").forEach((item, i) => {
        item.addEventListener("click", (event) => {
            if (!filtered[i].like) {
                filtered[i].like = true;
                likes++;
                localStorage.setItem("likes", JSON.stringify(likes));
            } else {
                filtered[i].like = false;
                likes--;
                localStorage.setItem("likes", JSON.stringify(likes));
            }
            // console.log(socks)
            filtered.forEach((filter) => {
                socks.forEach((original)=>{
                    if (original.id == filter.id) {
                        original.like = filter.like;
                    }
                })
            })
            console.log(socks)
            if (item.getAttribute("src") == "img/heart/red_heart.svg") {
                item.setAttribute("src", "img/heart/black_heart.svg")
            } else {
                item.setAttribute("src", "img/heart/red_heart.svg")
            }
            document.querySelector(".like-and-cart__like-count").innerText = likes;
            localStorage.setItem("socks", JSON.stringify(socks));
            console.log(likes);
        })
    })

}

const addCart = () => {
    let socks = JSON.parse(localStorage.getItem("socks"));

    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    document.querySelectorAll(".buy-button").forEach((item, i) => {
        item.addEventListener("click", () => {
            if (!socks[i].cart) {
                socks[i].cart = true;
                cartItems++;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                item.innerText = "Из корзины";
            } else {
                socks[i].cart = false;
                cartItems--;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                item.innerText = "В корзину";
            }
            document.querySelector(".like-and-cart__cart-count").innerText = cartItems;
            localStorage.setItem("socks", JSON.stringify(socks));
            console.log(cartItems);
        })
    })
}


export {addLikes, addCart};