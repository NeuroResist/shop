
if(!localStorage.getItem("goods")){
    const goods = [
        {
            id: 1,
            name: "Syltherine",
            img: "../img/Furniture/1.svg",
            price: 100,
            description: "Stylish cafe chair",
            like: false,
            cart: false,
            total: 1,
            sale: 30,
            isNew: false
        },
        {
            id: 2,
            name: "Leviosa",
            img: "../img/Furniture/2.svg",
            price: 200,
            description: "Stylish cafe chair",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        },
        {
            id: 3,
            name: "Lolito",
            img: "../img/Furniture/3.svg",
            price: 300,
            description: "Luxury big sofa",
            like: false,
            cart: false,
            total: 1,
            sale: 50,
            isNew: false
        },
        {
            id: 4,
            name: "Respira",
            img: "../img/Furniture/4.svg",
            price: 400,
            description: "Minimalist fan",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: true
        },
        {
            id: 5,
            name: "Grifo",
            img: "../img/Furniture/5.svg",
            price: 500,
            description: "Night lamp",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        },
        {
            id: 6,
            name: "Muggo",
            img: "../img/Furniture/6.svg",
            price: 600,
            description: "Small mug",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: true
        },
        {
            id: 7,
            name: "Pingky",
            img: "../img/Furniture/7.svg",
            price: 700,
            description: "Cute bed set",
            like: false,
            cart: false,
            total: 1,
            sale: 50,
            isNew: false
        },
        {
            id: 8,
            name: "Potty",
            img: "../img/Furniture/8.svg",
            price: 800,
            description: "Minimalist flower pot",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: true
        },
        {
            id: 9,
            name: "Ваза #1",
            img: "../img/Furniture/8.svg",
            price: 900,
            description: "Реально Ваза Ваза #1",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        },
        {
            id: 10,
            name: "Ваза #2",
            img: "../img/Furniture/8.svg",
            price: 1000,
            description: "Еще 1 ваза #2",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        },
        {
            id: 11,
            name: "Ваза #3",
            img: "../img/Furniture/8.svg",
            price: 1100,
            description: "Третья ваза #3",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        },
        {
            id: 12,
            name: "Ваза #4",
            img: "../img/Furniture/8.svg",
            price: 1200,
            description: "Самая крутая ваза #4",
            like: false,
            cart: false,
            total: 1,
            sale: 0,
            isNew: false
        }
    ]
    localStorage.setItem("goods",JSON.stringify(goods));
}
if(!localStorage.getItem("likes")){
    localStorage.setItem("likes",  "0");
}
if(!localStorage.getItem("cartItems")){
    localStorage.setItem("cartItems", "0");
}
if (!localStorage.getItem("totalPrice")){
    localStorage.setItem("totalPrice", "0");
}
