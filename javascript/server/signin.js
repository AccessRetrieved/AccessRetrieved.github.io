var email_raw = "work.jerrywu@gmail.com";
var password_raw = "Bestway1234";

function check() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if (email == email_raw && password == password_raw) {
        location.replace = "https://accessretrieved.github.io/account.html?email=" + String(stringToHash(email)) + "&password=" + String(stringToHash(password));
    }

}
function stringToHash(string) {           
    var hash = 0;
    
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}