
if(!localStorage.getItem("socks")){
    const socks = [
        {
            id: 1,
            name: "Syltherine",
            img: "../img/Furniture/1.svg",
            price: 100,
            description: "Stylish cafe chair",
            like: false,
            cart: false,
            total: 0,
            sale: 0,
            isNew: false
        },
        {
            id: 2,
            name: "Leviosa",
            img: "../img/Furniture/2.svg",
            description: "Stylish cafe chair",
            price: 200,
            like: false,
            cart: false,
            total: 0,
            sale: 0,
            isNew: true
        },
        {
            id: 3,
            name: "Lolito",
            img: "../img/Furniture/3.svg",
            price: 300,
            description: "Luxury big sofa",
            like: false,
            cart: false,
            total: 0,
            sale: 0,
            isNew: true
        },
        {
            id: 4,
            name: "Respira",
            img: "../img/Furniture/4.svg",
            price: 400,
            description: "Minimalist fan",
            like: false,
            cart: false,
            total: 0,
            sale: 70,
            isNew: false
        },
        {
            id: 5,
            name: "Grifo",
            img: "../img/Furniture/5.svg",
            price: 500,
            description: "Night lamp",
            like: false,
            cart: false,
            total: 0,
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
            total: 0,
            sale: 75,
            isNew: false
        },
        {
            id: 7,
            name: "Pingky",
            img: "../img/Furniture/7.svg",
            price: 700,
            description: "Cute bed set",
            like: false,
            cart: false,
            total: 0,
            sale: 30,
            isNew: true
        },
        {
            id: 8,
            name: "Potty",
            img: "../img/Furniture/8.svg",
            price: 800,
            description: "Minimalist flower pot",
            like: false,
            cart: false,
            total: 0,
            sale: 0,
            isNew: false
        }
    ]
    localStorage.setItem("socks",JSON.stringify(socks));
}
if(!localStorage.getItem("likes")){
    localStorage.setItem("likes",  JSON.stringify(0));
}
if(!localStorage.getItem("cartItems")){
    localStorage.setItem("cartItems",  JSON.stringify(0));
}
if (!localStorage.getItem("totalPrice")){
    let totalPrice = 0;
}
