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

$(document).ready(function () {
    let mainBox = $(".main_box");
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
    $("#first_right_arrow").on("click", next)

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
    $("#first_left_arrow").on("click", prev)
})