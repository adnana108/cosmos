let itemsNum = document.getElementById('itemsNum');
let valueOf = itemsNum.textContent;
let parsed = parseInt(valueOf);

function addToCard() {
    parsed = parsed + 1
    itemsNum.textContent = parsed
};

let purButtons = document.getElementsByClassName('purchase');
for (let i = 0; i < purButtons.length; i++) {
    purButtons[i].addEventListener("click", addToCard)
};


let mainBox = $(".main_box")
let index = 0;

function next() {
    let curent = $(".active");
    let nextContainer = curent.next();

    if (index < mainBox.length - 1 && nextContainer) {
        index++
        curent.removeClass("active")
        nextContainer.addClass("active")
    } else {
        index = 0
        curent.removeClass("active")
        curent = mainBox[0]
        curent.classList.add("active")
    }
}

function prev() {
    let curent = $(".active")
    let prevContainer = curent.prev()

    if (index > 0 && prevContainer) {
        index--
        curent.removeClass("active")
        prevContainer.addClass("active")
    } else {
        index = mainBox.length - 1
        curent.removeClass("active")
        curent = mainBox[index]
        curent.classList.add("active")
    }
}
$(document).ready(function () {

    $("#first_right_arrow").on("click", next)

    $("#first_left_arrow").on("click", prev)
})


let image = $(".hero_img")
function sliderForPhone(e) {
    let width = image.innerWidth()
    let pOffset = image.offset()
    let x = e.pageX - pOffset.left
    if (width / 2 > x) {
        prev()
    } else {
        next()
    }
}


document.addEventListener("DOMContentLoaded", init())

function init() {
    let query = window.matchMedia('(max-width:768px)')
    if (query.matches) {
        image.on("click", sliderForPhone)
    }
}







