function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    var language = getCookie("language");
    if (language != "") {
        if (language == "en") {
            window.location = "https://accessretrieved.github.io";
        } else {
            // pass
        }
    } else {
        // pass
    }
}

function setLanguage(lang) {
    if (lang == "en") {
        setCookie("language", "en", 30);
    } else if (lang == "zh-cn") {
        setCookie("language", "zh-cn", 30);
    }
}