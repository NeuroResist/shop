
const addLikes = (filtered) => {


    // document.querySelectorAll(".favorite").forEach((item, i) => {
    //     item.addEventListener("click", () => {
    //         let likes = JSON.parse(localStorage.getItem("likes"));
    //         let socks = JSON.parse(localStorage.getItem("socks"));
    //         console.log(likes)
    //         if (!filtered[i].like) {
    //             filtered[i].like = true;
    //             likes++;
    //             localStorage.setItem("likes", JSON.stringify(likes));
    //         } else {
    //             filtered[i].like = false;
    //             likes--;
    //             localStorage.setItem("likes", JSON.stringify(likes));
    //         }
    //         // console.log(socks)
    //         filtered.forEach((filter) => {
    //             socks.forEach((original) => {
    //                 if (original.id == filter.id) {
    //                     original.like = filter.like;
    //                 }
    //             })
    //         })
    //
    //         if (item.getAttribute("src") == "img/heart/red_heart.svg") {
    //             item.setAttribute("src", "img/heart/black_heart.svg")
    //         } else {
    //             item.setAttribute("src", "img/heart/red_heart.svg")
    //         }
    //
    //         document.querySelector(".like-and-cart__like-count").innerText = likes;
    //         localStorage.setItem("socks", JSON.stringify(socks));
    //         console.log(likes);
    //     })
    // })
}

const addCart = (filtered) => {

    document.querySelectorAll(".buy-button").forEach((item, i) => {
        item.addEventListener("click", () => {
            let socks = JSON.parse(localStorage.getItem("socks"));
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));

            if (!filtered[i].cart) {
                filtered[i].cart = true;
                cartItems++;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
            } else {
                filtered[i].cart = false;
                cartItems--;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
            }

            filtered.forEach((filter) => {
                socks.forEach((original) => {
                    if (original.id == filter.id) {
                        original.cart = filter.cart;
                    }
                })
            })

            const crosses = document.querySelectorAll(".cross");
            console.log(item.textContent)
            if (item.textContent == "В корзину") {
                if (crosses.length) crosses[i].style.transform = "rotate(0)";
                item.innerText = "Из корзины";
            } else {
                if (crosses.length) crosses[i].style.transform = "rotate(45deg)";
                item.innerText = "В корзину";
            }

            document.querySelector(".like-and-cart__cart-count").innerText = cartItems;
            localStorage.setItem("socks", JSON.stringify(socks));
        })
    })
}


export {addLikes, addCart};