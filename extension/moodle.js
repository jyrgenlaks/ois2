var nr_of_times_clicked = 0;

chrome.storage.local.get('autologin', function (result) {
    if(result.autologin == undefined){
        result.autologin = true;
    }
    if(result.autologin){
        setInterval(clickButtons, 500);
    }
});

function clickButtons() {
    // Click "Sisene" on moodle homepage
    var spans = document.getElementsByTagName("a");
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("Sisene")  ||  spans[i].innerText.includes("Log in")) {
            console.log(spans[i]);
            spans[i].click();
        }
    }

    // Click the OpenID choice on Moodle login page
    var spans = document.getElementsByTagName("h5");
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("üliõpilane ja töötaja")) {
            console.log(spans[i]);
            if(nr_of_times_clicked < 2){
                spans[i].click();
                nr_of_times_clicked++;
            }
        }
    }
    
    // Click the user account on https://login.microsoftonline.com/
    var spans = document.getElementsByTagName("div");
    for (var i = 0; i < spans.length; i++) {
        if ( 
            spans[i].classList.contains("table-cell")  &&
            spans[i].classList.contains("text-left")  &&
            spans[i].classList.contains("content")  ) {
            console.log(spans[i]);
            spans[i].click();
            break;
        }
    }

    // Check if the password field has been filled out on https://login.microsoftonline.com/
    var spans = document.getElementsByName("passwd");
    for (var i = 0; i < spans.length; i++) {
        var pwd = spans[i];
        if (pwd.value.length > 2) {
            // Here the field is filled, press the login buttonü
            document.getElementById("idSIButton9").click();
        }
    }

    // Click the "Extend session" button
    var elements = document.getElementsByClassName("btn-primary");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].innerText.includes("Extend session")){
            elements[i].click();
        }
    }
    
}





