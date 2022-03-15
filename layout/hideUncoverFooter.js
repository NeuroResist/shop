const menuElements = document.querySelector(".footer-content").children;

for(let item of menuElements){
    let isClicked = false;
    item.onclick = ()=>{
        if(window.screen.width<1040) {
            console.log(item.querySelector(".list"))
            if (!isClicked) {
                item.querySelector(".list").style.display = "block";
            } else {
                item.querySelector(".list").style.display = "none";
            }
            isClicked = !isClicked;
        }
    }
}



