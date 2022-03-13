
const render = (item, blocks, index) => {

    const block = document.createElement('div');     // Создание блока для контента
    block.classList.add("block", "center__block", "center")


    const img = document.createElement('img');      // добавление Картинки
    img.setAttribute("src", item.img);

    const price = document.createElement('p');      // Добавление Цены
    price.innerHTML = "Rp " + item.price;
    price.classList.add("text", "block__price")

    const name = document.createElement('p');      // Добавление Названия
    name.innerHTML = item.name;
    name.classList.add("block__name")


    const description = document.createElement('h6');      // Добавление Описания
    description.innerHTML = item.description;
    description.classList.add("block__description")



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




    const hover = document.createElement('div');      // Добавление Названия
    hover.classList.add("hover");
    const blockButton = document.createElement('button');
    const blockInputP = document.createElement('p');
    const blockDiv = document.createElement('div');
    const blockShare = document.createElement('div');
    const blockShareA = document.createElement('a');
    const blockShareImg = document.createElement('img');
    const blockLike = document.createElement('div');
    const blockLikeA = document.createElement('div');
    const blockLikeImg = document.createElement('img');

    blockButton.innerText = "Add to cart";
    blockButton.classList.add("hover__input");
    blockLikeImg.setAttribute("src", "../img/Furniture/Like.svg");
    blockLikeImg.style.marginRight = "10px"

    blockDiv.appendChild(blockButton);
    blockShareImg.setAttribute("src", "../img/Furniture/Share.svg");
    blockShareImg.style.marginRight = "10px";

    blockDiv.classList.add("block-div");

    blockDiv.appendChild(blockShare);
    blockShare.classList.add("block-div__share")
    blockShare.appendChild(blockShareA)
    blockShareA.textContent = "Share";
    blockShareA.prepend(blockShareImg)

    blockDiv.appendChild(blockLike);
    blockLike.classList.add("block-div__like")
    blockLike.appendChild(blockLikeA);
    blockLikeA.textContent = "Like";
    blockLikeA.prepend(blockLikeImg);


    blockShareA.setAttribute("href","#")
    blockShareA.classList.add("link")
    blockLikeA.setAttribute("href","#")
    blockLikeA.classList.add("link")
    blockLikeA.classList.add("link__like")

    const buy = blockButton;
    const favorite = blockLikeA;


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


    // При рендере добавление Лайков и В корзину

    favorite.onclick = () => {
        console.log("ddsfdsf")
        const socks = JSON.parse(localStorage.getItem("socks"))
        let sock = socks.find(sock => sock.id === item.id)
        let likeCounter = localStorage.getItem("likes")

        if (!sock.like) {
            likeCounter++;
            favorite.firstChild.setAttribute("src", "../img/Furniture/Like-red.svg");
        } else {
            likeCounter--;
            favorite.firstChild.setAttribute("src", "../img/Furniture/Like.svg");
        }
        sock.like = !sock.like ;

        localStorage.setItem("socks", JSON.stringify(socks))

        localStorage.setItem("likes", likeCounter)
        document.querySelector(".likeCount").innerHTML = likeCounter;
    }

    buy.onclick = () => {
        const socks = JSON.parse(localStorage.getItem("socks"))
        let sock = socks.find(sock => sock.id === item.id)
        let buyCounter = localStorage.getItem("cartItems")

        if (!sock.cart) {
            buyCounter++;
            buy.innerHTML = "Remove from cart";

        } else {
            buyCounter--;
            buy.innerHTML = "Add to cart";

        }
        sock.cart = !sock.cart ;

        localStorage.setItem("socks", JSON.stringify(socks))

        localStorage.setItem("cartItems", buyCounter)
        document.querySelector(".cartCount").innerHTML = buyCounter;
    }




    if (!item.like) {
        favorite.firstChild.setAttribute("src", "../img/Furniture/Like.svg");

    } else {
        favorite.firstChild.setAttribute("src", "../img/Furniture/Like-red.svg");
    }

    if (!item.cart) {
        buy.innerHTML = "Add to cart";
    } else {
        buy.innerHTML = "Remove from cart";
    }










}

// Рендер каждого блока по массиву, 1 элемент - 1 блок
const blockRender = (socks, blocks) => {
    socks.forEach((item, index) => {
        render(item, blocks, index)
    })

    document.querySelector(".main-block").appendChild(blocks)
}


export {blockRender};





