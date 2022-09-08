var last_pwd_length = 0;

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

    var pwd_length = pwd.length;
    if (usr.length > 2 && pwd_length - last_pwd_length >= 8) {
        // There is text in the username field and a lot of text appeared in
        // the password field at once - probably some tool auto-filled it.
        // Here the fields are filled, press the login button
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].innerText === "Logi sisse" || buttons[i].innerText === "Login") {
                buttons[i].click();
            }
        }
    }
    last_pwd_length = pwd_length;
}