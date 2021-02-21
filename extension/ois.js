// Searching for "Logi sisse" buttons
chrome.storage.local.get('autologin', function (result) {
    if(result.autologin == undefined){
        result.autologin = true;
    }
    if(result.autologin){
        setInterval(login, 1000);
    }
});

// Styling the page
chrome.storage.local.get('darkmode', function (result) {
    if(result.darkmode == undefined){
        result.darkmode = true;
    }
    if(result.darkmode){
        setInterval(stylize, 300);
    }
});

function login() {
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText === "Logi sisse" || spans[i].innerText === "Login now" || spans[i].innerText === "Login") {
            console.log(spans[i]);
            spans[i].click();
        }
    }
}

function stylize() {
    bgColor = "#111";
    fgColor = "#FFF";
    var elementTypes = ["body", "button", "mat-toolbar-row", "mat-toolbar", "mat-card", "footer", "b", "mat-chip"];
    for (var type = 0; type < elementTypes.length; type++) {
        var elements = document.getElementsByTagName(elementTypes[type]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = fgColor;
            elements[i].style.background = bgColor;
        }
    }

    var elementTypes = ["mat-drawer-inner-container", "mat-cell", "mat-header-cell", "mat-button-wrapper", "mat-tab-link", "ng-star-inserted"];
    for (var type = 0; type < elementTypes.length; type++) {
        var elements = document.getElementsByClassName(elementTypes[type]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = fgColor;
            elements[i].style.background = bgColor;
        }
    }

    var base = document.getElementsByTagName("mat-sidenav-content")[0]
    var elements = base.getElementsByTagName("div");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = fgColor;
        elements[i].style.background = bgColor;
    }

    var elementTypes = ["mat-list-item-content"];
    for (var type = 0; type < elementTypes.length; type++) {
        var elements = document.getElementsByClassName(elementTypes[type]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = fgColor;
            elements[i].style.background = bgColor;
        }
    }
}
