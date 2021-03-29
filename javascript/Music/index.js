var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');

body.addEventListener("click", function() {
    accountPopup.style.display = "none";
}, false);
accountPopup.addEventListener("click", function(event) {
    event.stopPropagation();
}, false);
avatar.addEventListener("click", function(event) {
    event.stopPropagation();
    accountPopup.style.display = "block";
})

function showAccountPopup() {
    accountPopup.style.display = "block";
}