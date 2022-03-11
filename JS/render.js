// Функция рендера блоков по 1
let likeCounter = 0
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

    favorite.onclick = () => {
        const socks = JSON.parse(localStorage.getItem("socks"))
        let sock = socks.find(sock => sock.id === item.id)

        if (!sock.like) {
            likeCounter++;
            favorite.src = "img/heart/red_heart.svg"
        } else {
            likeCounter--;
            favorite.src = "img/heart/black_heart.svg"
        }
        sock.like = !sock.like

        localStorage.setItem("socks", JSON.stringify(socks))
        console.log(JSON.parse(localStorage.getItem("socks")))

        document.querySelector(".like-and-cart__like-count").innerHTML = likeCounter
    }

    buyAndFavorite.appendChild(buy);
    buyAndFavorite.appendChild(favorite);

    if (!item.like) {
        favorite.setAttribute("src", "img/heart/black_heart.svg");
    } else {
        favorite.setAttribute("src", "img/heart/red_heart.svg");
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

    socks.forEach((item, index) => {
        render(item, blocks, index)
    })
    document.body.appendChild(blocks)
}


export {blockRender, render};





