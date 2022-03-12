
const render = (item, blocks, index) => {

    const block = document.createElement('div');     // Создание блока для контента
    block.classList.add("block", "center__block", "center")

    const h1 = document.createElement('h1');        // Добавление заголовка с названием
    h1.innerHTML = item.name;
    h1.classList.add("text")

    const img = document.createElement('img');      // добавление картинки
    img.setAttribute("src", item.img);

    const price = document.createElement('p');      // Добавление цены
    price.innerHTML = item.price + " рублей";
    price.classList.add("text", "text__price")

    const buyAndFavorite = document.createElement('div');
    buyAndFavorite.classList.add("center", "margin-bottom")

    const buy = document.createElement('button');
    const favorite = document.createElement('img');

    // При рендере добавление

    favorite.onclick = () => {
        const socks = JSON.parse(localStorage.getItem("socks"))
        let sock = socks.find(sock => sock.id === item.id)
        let likeCounter = localStorage.getItem("likes")

        if (!sock.like) {
            likeCounter++;
            favorite.setAttribute("src", "../img/heart/red_heart.svg");
        } else {
            likeCounter--;
            favorite.setAttribute("src", "../img/heart/black_heart.svg");
        }
        sock.like = !sock.like ;

        localStorage.setItem("socks", JSON.stringify(socks))

        localStorage.setItem("likes", likeCounter)
        document.querySelector(".like-and-cart__like-count").innerHTML = likeCounter;
    }

    buy.onclick = () => {
        const socks = JSON.parse(localStorage.getItem("socks"))
        let sock = socks.find(sock => sock.id === item.id)
        let buyCounter = localStorage.getItem("cartItems")

        if (!sock.cart) {
            buyCounter++;
            buy.innerHTML = "Из корзины";

        } else {
            buyCounter--;
            buy.innerHTML = "В корзину";

        }
        sock.cart = !sock.cart ;

        localStorage.setItem("socks", JSON.stringify(socks))

        localStorage.setItem("cartItems", buyCounter)
        document.querySelector(".like-and-cart__cart-count").innerHTML = buyCounter;
    }



    buyAndFavorite.appendChild(buy);
    buyAndFavorite.appendChild(favorite);

    if (!item.like) {
        favorite.setAttribute("src", "../img/heart/black_heart.svg");
    } else {
        favorite.setAttribute("src", "../img/heart/red_heart.svg");
    }
    favorite.classList.add("favorite");

    if (!item.cart) {
        buy.innerHTML = "В корзину";
    } else {
        buy.innerHTML = "Из корзины";
    }
    buy.classList.add("center", "buy-button", "text__price")

    // Добавление всего в блок, а потом блок на страницу
    block.appendChild(h1);
    block.appendChild(img);
    block.appendChild(price);
    block.appendChild(buyAndFavorite)
    blocks.appendChild(block);


}

// Рендер каждого блока по массиву, 1 элемент - 1 блок
const blockRender = (socks, blocks) => {
    console.log(document.querySelector(".main-block"))
    socks.forEach((item, index) => {
        render(item, blocks, index)
    })

    document.querySelector(".main-block").appendChild(blocks)
}


export {blockRender};





