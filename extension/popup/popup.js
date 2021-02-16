
function autologinChanged(event){
    chrome.storage.local.set({ autologin: event.target.checked });
    showNotice();
}

function darkmodeChanged(event){
    chrome.storage.local.set({ darkmode: event.target.checked });
    showNotice();
}

function showNotice(){
    document.getElementById("notice").style.visibility = "visible";
}

window.onload = function () {
    // Set callbacks
    document.getElementById("auto-login").onchange = autologinChanged;
    document.getElementById("dark-mode").onchange = darkmodeChanged;
    
    // Load default values
    chrome.storage.local.get('autologin', function (result) {
        if(result.autologin == undefined){
            result.autologin = true;
        }
        document.getElementById("auto-login").checked = result.autologin;
    });
    chrome.storage.local.get('darkmode', function (result) {
        if(result.darkmode == undefined){
            result.darkmode = false;
        }
        document.getElementById("dark-mode").checked = result.darkmode;
    });
}