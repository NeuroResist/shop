const leftCross = document.querySelector(".dot__left-cross");
const rightCross = document.querySelector(".dot__right-cross");
const dots = document.querySelectorAll(".slider");
//dots.find((dot)=>{dot.classList.contains("dot_focused")})
const slider = () => {
    leftCross.onclick = (() => {
        //const now = document.querySelector(".dot_focused");
        if (item.classList.contains("dot_focused") && !(i === 1)) {
            console.log(dots[i + 1])
            item.classList.add("dot_focused");
            dots[i - 1].classList.add("dot_focused");
            dots[i - 1].classList.remove("dot_unfocused");

        }

    });

    rightCross.onclick = (() => {
        dots.forEach((item, i) => {
            if (item.classList.contains("dot_focused") && !(dots[dots.length])) {
                console.log(dots[i + 1])

                item.classList.add("dot_focused");
                dots[i + 1].classList.add("dot_focused");
                dots[i + 1].classList.remove("dot_unfocused");
            }
        })
    });
}

export {slider}