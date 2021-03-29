var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');
var isPlaying = 0;

var audio = new Audio();

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

function playSelected(trackName) {
    if (isPlaying == 1) {
        audio.pause();
        var path = `/server/music/${trackName}.mp3`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
    } else {
        var path = `/server/music/${trackName}.mp3`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
    }
}