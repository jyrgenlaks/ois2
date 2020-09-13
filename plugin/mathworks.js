setInterval(checkPopup, 500);

function checkPopup(){
    var d = document.getElementById("country-unselected").style.display;
    if(d === "block"){
        // The panel is visible
        console.log("Popup opened");
        closePopup();
    }
}

function closePopup() {
    var spans = document.getElementsByTagName("span");
    var closeButton = null;
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("×")) {
            closeButton = spans[i];
        }
    }
    if(closeButton != null){
        closeButton.click();
    }
}