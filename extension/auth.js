
 chrome.storage.local.get('autologin', function (result) {
    if(result.autologin == undefined){
        result.autologin = true;
    }
    if(result.autologin){
        setInterval(clickButtons, 500);
    }
});

function clickButtons(){
    // Check if the username & password fields have been filled out
    var usr = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    if (usr.length > 2 && pwd.length > 2) {
        // Here the fields are filled, press the login button
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].innerText === "Logi sisse" || buttons[i].innerText === "Login") {
                buttons[i].click();
            }
        }
    }
}