
if(!localStorage.getItem("socks")){
    const socks = [
        {
            id: 1,
            name: "yellow",
            img: "/img/socks/yellow.svg",
            price: 100,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 2,
            name: "green",
            img: "/img/socks/green.svg",
            price: 200,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 3,
            name: "blue",
            img: "/img/socks/blue.svg",
            price: 300,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 4,
            name: "purple",
            img: "/img/socks/purple.svg",
            price: 400,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 5,
            name: "pink",
            img: "/img/socks/pink.svg",
            price: 500,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 6,
            name: "orange",
            img: "/img/socks/orange.svg",
            price: 600,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 7,
            name: "grey",
            img: "/img/socks/grey.svg",
            price: 700,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 8,
            name: "lime",
            img: "/img/socks/lime.svg",
            price: 800,
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 9,
            name: "red",
            price: 900,
            img: "/img/socks/red.svg",
            like: false,
            cart: false,
            total: 0
        },
        {
            id: 10,
            name: "coral",
            img: "/img/socks/coral.svg",
            price: 1000,
            like: false,
            cart: false,
            total: 0
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
