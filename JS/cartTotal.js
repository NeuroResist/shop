const cross = (filtered) => {
    const crosses = document.querySelectorAll(".cross");
    const socksButton = document.querySelectorAll(".buy-button");
    let socks = JSON.parse(localStorage.getItem("socks"));
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    console.log(crosses)

    crosses.forEach((item, i) => {

        item.addEventListener("click", () => {

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

            if (socksButton[i].textContent == "В корзину") {
                item.style.transform = "rotate(0)";
                socksButton[i].innerText = "Из корзины";
            } else {
                item.style.transform = "rotate(45deg)";
                socksButton[i].innerText = "В корзину";
            }

            document.querySelector(".like-and-cart__cart-count").innerText = cartItems;
            localStorage.setItem("socks", JSON.stringify(socks));
            console.log(cartItems);

        })
    })
}

const cartTotalItems = (filtered) => {
    let socks = JSON.parse(localStorage.getItem("socks"));
    const left = document.querySelectorAll(".left");
    const right = document.querySelectorAll(".right");
    const red = document.querySelectorAll(".red");

    left.forEach((item, i) => {
        item.addEventListener("click", () => {
            console.log("left");
            if (filtered[i].total != 0) {
                filtered[i].total--;
                red[i].innerText = filtered[i].total;
            }

            filtered.forEach((filter) => {
                socks.forEach((original) => {
                    if (original.id == filter.id) {
                        original.total = filter.total;
                    }
                })
            })

            localStorage.setItem("socks", JSON.stringify(socks));
            totalPrice()
        })
    })

    right.forEach((item, i) => {
        item.addEventListener("click", () => {
            console.log("right");
            filtered[i].total++;
            console.log(filtered[i].total)
            red[i].innerText = filtered[i].total;


            filtered.forEach((filter) => {
                socks.forEach((original) => {
                    if (original.id == filter.id) {
                        original.total = filter.total;
                    }
                })
            })

            localStorage.setItem("socks", JSON.stringify(socks));
            totalPrice()


        })
    })
}


const totalPrice = () => {
    let socks = JSON.parse(localStorage.getItem("socks"));
    let total = 0;
    socks.forEach((item)=>{
        total+=item.total*item.price;
    })
    document.querySelector(".totalPrice").innerText = total;
}

export {cross, cartTotalItems, totalPrice}