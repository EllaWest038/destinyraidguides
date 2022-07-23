// Makes sure that the nav bar is displaying correctly on window resize after interacting with the hamburger menu
window.addEventListener("resize", function() {
    let nav = document.getElementById("nav");

    if (nav.style.display == "none" && window.innerWidth > 720) {
        nav.style.display = "flex";
    } else if (nav.style.display == "flex" && this.window.innerWidth <= 720) {
        nav.style.display = "none";
    }
})


// Toggle display of the nav menu on click of the hamburger icon
function toggleNav() {
    let nav = document.getElementById("nav");

    if (nav.style.display == "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}


// Alert users of incomplete pages
const notFinished = ["lastWish.html", "gardenOfSalvation.html", "deepStoneCrypt.html", "vaultOfGlass.html", "vowOfTheDisciple.html"];

window.onload = function () {
    let page = window.location.pathname.split("/").pop();

    if (notFinished.includes(page)) {
        alert("This page is incomplete, any information displayed is not final.");
    }
}