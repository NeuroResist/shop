const leftCross = document.querySelector(".tips-tricks__cross-left");
const rightCross = document.querySelector(".tips-tricks__cross-right");
const dots = document.querySelectorAll(".slider");
//dots.find((dot)=>{dot.classList.contains("dot_focused")})

const slider = () => {
    leftCross.onclick = (() => {
        dots.forEach((item, i)=>{
            if (item.classList.contains("dot_focused") && !(i === 0)) {
                console.log(dots[i-1])
                item.classList.add("dot_unfocused");
                item.classList.remove("dot_focused");
                dots[i - 1].classList.add("dot_focused");
                dots[i - 1].classList.remove("dot_unfocused");
            }
        })

    });

    rightCross.onclick = (() => {
        let stop = false;
        dots.forEach((item, i)=>{
            if (item.classList.contains("dot_focused") && !(i === dots.length-1) && !stop) {
                console.log(dots[i+1])
                item.classList.add("dot_unfocused");
                item.classList.remove("dot_focused");
                dots[i+1].classList.add("dot_focused");
                dots[i+1].classList.remove("dot_unfocused");
                stop=!stop;
            }
        })
    });
}

export {slider}