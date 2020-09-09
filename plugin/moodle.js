var nr_of_times_clicked = 0;

setInterval(function () {
    // Click "Sisene" on moodle homepage
    var spans = document.getElementsByTagName("a");
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("Sisene")) {
            console.log(spans[i]);
            spans[i].click();
        }
    }

    // Click the OpenID choice on Moodle login page
    var spans = document.getElementsByTagName("h5");
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerText.includes("TÜ arvutivõrgu konto")) {
            console.log(spans[i]);
            if(nr_of_times_clicked < 5){
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
}, 500);





