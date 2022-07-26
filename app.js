function popUp() {
    document.getElementById("popup").style.animation = "3s slidePopup linear forwards"
}

popUp();

function popOut() {
    document.getElementById("popup").style.animation = "2s slideOutPopUp linear forwards"
}
setTimeout(popOut, 4500)



