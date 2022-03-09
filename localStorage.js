// localStorage

//
const number = 123;
localStorage.setItem("number", number);  // Установить значение "123" в "number"
localStorage.getItem("number"); // получить значение по ключу number
localStorage.removeItem("number"); // удалить значение по ключу number
localStorage.key(0); // взять значение 0-го ключа в localStorage
localStorage.clear(); // полностью очистить localStorage

// Занесение объекта в localStorage
const obj = {
    name:"Yara",
    age: 20
}
localStorage.setItem("person", JSON.stringify(obj)); // занести в localStorage что-то в виде JSON
const raw = localStorage.getItem("person");
const  person = JSON.parse(raw); // Распарсить JSON
person.name = "Roma";
console.log(person);


// Отслеживание изменения localStorage в другом окне
window.addEventListener("storage", event=>{
    console.log(event);
})