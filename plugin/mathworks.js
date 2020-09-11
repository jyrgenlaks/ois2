setTimeout(closePopup, 1000);

function closePopup() {
    var spans = document.getElementsByTagName("span");
    var closeButton = null;
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("×")) {
            closeButton = spans[i];            
            console.log(spans[i]);
        }
    }
    if(closeButton != null){
        closeButton.click();
    }
}