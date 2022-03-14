const render = (item, blocks) => {

    const block = document.createElement('div');     // Создание блока для контента
    block.classList.add("block", "center")

    const img = document.createElement('img');      // Крестик - удалить
    img.setAttribute("src", "img/cross.svg");
    img.classList.add("cross");

    const name = document.createElement('p');      // Добавление названия носка
    name.innerHTML = item.name + "***";
    name.classList.add("text", "text__total")

    const div = document.createElement('div');      // Крестик - удалить
    div.classList.add("center");

    const left = document.createElement('button'); // Стрелка влево
    left.classList.add("left");

    const right = document.createElement('button');     // Стрелка вправо
    right.classList.add("right");


    const p = document.createElement('p');              // количество товара
    p.classList.add("red");
    p.innerText = item.total;
    left.innerText = "<";
    right.innerText = ">";

    div.appendChild(left);
    div.appendChild(p);
    div.appendChild(right);
    // Добавление всего в блок, а потом блок на страницу

    block.appendChild(img)
    block.appendChild(name)
    block.appendChild(div)
    blocks.appendChild(block);

}

// Рендер каждого блока по массиву, 1 элемент - 1 блок
const totalRender = (socks, blocks) => {
    socks.forEach((item, index) => {
        render(item, blocks, index)
    })
    document.body.appendChild(blocks)
}


export {totalRender};

