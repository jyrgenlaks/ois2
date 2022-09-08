var nr_of_times_clicked = 0;
var last_pwd_length = 0;

chrome.storage.local.get('autologin', function (result) {
    if(result.autologin == undefined){
        result.autologin = true;
    }
    if(result.autologin){
        var interval = 500;
        if(window.location.href.includes("login.microsoftonline.com")){
            // Need to react fast for _reliably_ detecting password field auto-fills
            interval = 100;
        }
        setInterval(clickButtons, interval);
    }
});

setTimeout(fixLinkRedirects, 500);

function fixLinkRedirects(){
    links = document.getElementsByTagName("a");

    // Loop through all links
    for(var i = 0; i < links.length; i++){
        var link = links[i];
        // If it should, but it doesn't have it yet, then add it!
        if(!link.href.includes("&redirect=1") && link.href.includes("?")){
            link.href += "&redirect=1";
        }
    }
}

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
        var pwd_length = pwd.value.length
        if (pwd_length - last_pwd_length >= 8) {
            // A lot of characters appeared in the input field at once,
            // most likely something auto-filled it with the correct password.
            // Now press the login button!
            document.getElementById("idSIButton9").click();
        }
        last_pwd_length = pwd_length;
    }

    // Click the "Extend session" button
    var elements = document.getElementsByClassName("btn-primary");
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].innerText.includes("Extend session")){
            elements[i].click();
        }
    }
}
