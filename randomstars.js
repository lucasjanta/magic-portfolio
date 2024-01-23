const yellowStar = document.querySelector(".yellow-star");
const purpleStar = document.querySelector(".purple-star");

window.onload = function () {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 320) {
        const newStar = document.createElement("div");
        newStar.classList.add("yellow-star");
        sections[0].appendChild(newStar);
    }
}