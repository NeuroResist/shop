
const render = (item, blocks, index) => {

    const block = document.createElement('div');     // Создание блока для контента
    block.classList.add("block", "center__block", "center")


    const img = document.createElement('img');      // добавление Картинки
    img.setAttribute("src", item.img);

    const price = document.createElement('p');      // Добавление Цены
    price.innerHTML = "Rp " + item.price;
    price.classList.add("text", "block__price")

    const name = document.createElement('h5');      // Добавление Названия
    name.innerHTML = item.name;
    name.classList.add("block__name")


    const description = document.createElement('h6');      // Добавление Описания
    description.innerHTML = item.description;
    description.classList.add("block__description")

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
        //document.querySelector(".like-and-cart__like-count").innerHTML = likeCounter;
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
        //document.querySelector(".like-and-cart__cart-count").innerHTML = buyCounter;
    }



    buyAndFavorite.appendChild(buy);
    buyAndFavorite.appendChild(favorite);


    if(item.isNew){
        const isNew = document.createElement('div');
        const isNewTextP = document.createElement('p');

        isNew.classList.add("circle");
        isNew.classList.add("circle__text");
        isNewTextP.innerText = "New";
        isNew.appendChild(isNewTextP);
        block.appendChild(isNew);
    }

    if(item.sale){
        const isNew = document.createElement('div');
        const isNewTextP = document.createElement('p');

        isNew.classList.add("circle");
        isNew.classList.add("circle__sale");
        isNew.classList.add("circle__text");
        isNewTextP.innerText = "-" + item.sale + "%";
        isNew.appendChild(isNewTextP);
        block.appendChild(isNew);
    }


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




    const hover = document.createElement('div');      // Добавление Названия
    hover.classList.add("hover");
    const blockButton = document.createElement('button');
    const blockInputP = document.createElement('p');
    const blockDiv = document.createElement('div');
    const blockShare = document.createElement('div');
    const blockShareA = document.createElement('a');
    const blockShareImg = document.createElement('img');
    const blockShareP = document.createElement('p');
    const blockLike = document.createElement('div');
    const blockLikeA = document.createElement('a');
    const blockLikeImg = document.createElement('img');
    const blockLikeP = document.createElement('p');

    blockButton.appendChild(blockInputP);
    blockInputP.innerText = "Add to cart";
    blockButton.classList.add("hover__input");

    blockDiv.appendChild(blockButton);
    blockShareP.innerText = "Share";
    blockShareImg.setAttribute("src", "../img/Furniture/Share.svg");

    blockDiv.classList.add("block-div");

    blockDiv.appendChild(blockShare);
    blockShare.classList.add("block-div__share")
    blockShare.appendChild(blockShareImg)
    blockShare.appendChild(blockShareA)
    blockShareA.appendChild(blockShareP)

    blockDiv.appendChild(blockLike);
    blockLike.classList.add("block-div__like")
    blockLike.appendChild(blockLikeImg);

    blockLike.appendChild(blockLikeA);
    blockLikeA.appendChild(blockLikeP);


    blockShareP.classList.add("block-div__margin")
    blockLikeP.classList.add("block-div__margin")

    blockShareA.setAttribute("href","#")
    blockShareA.classList.add("a")
    blockLikeA.setAttribute("href","#")
    blockLikeA.classList.add("a")

    blockLikeP.innerText = "Like";
    blockLikeImg.setAttribute("src", "../img/Furniture/Like.svg");



    const cartLikeShare = document.createElement('div');
    cartLikeShare.appendChild(blockButton);
    cartLikeShare.appendChild(blockDiv);
    cartLikeShare.classList.add("cartLikeShare")



    // Добавление всего в блок, а потом блок на страницу
    block.appendChild(img);
    block.appendChild(name);
    block.appendChild(description);
    block.appendChild(price);
    block.appendChild(cartLikeShare);


    block.appendChild(hover);
    //block.appendChild(buyAndFavorite)
    block.style.margin = "0 12px 32px 12px"
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





