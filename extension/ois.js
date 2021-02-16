// Searching for "Logi sisse" buttons
setInterval(login, 1000);

// Styling the page
//setInterval(stylize, 300);
//setTimeout(stylize, 1000);

// Refresh the session token every minute
setInterval(refreshSession, 60 * 1000);

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
    var elementTypes = ["body", "button", "mat-toolbar-row", "mat-toolbar", "mat-card", "footer", "b", "span"];
    for (var type = 0; type < elementTypes.length; type++) {
        var elements = document.getElementsByTagName(elementTypes[type]);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = fgColor;
            elements[i].style.background = bgColor;
        }
    }


    var elements = document.getElementsByClassName("mat-button-wrapper");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = fgColor;
        elements[i].style.background = bgColor;
    }

    var elements = document.getElementsByClassName("mat-drawer-inner-container");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = fgColor;
        elements[i].style.background = bgColor;
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


function refreshSession() {
    console.log("doing request");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://ois2.ut.ee/api/academic/year", true);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}