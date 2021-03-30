var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');
var isPlaying = 0;
var playerCover = document.getElementById('player-cover');
var playerTitle = document.getElementById('player-title');

var playerPrevious = document.getElementById('player-previous');
var playerPlay = document.getElementById('player-play');
var playerNext = document.getElementById('player-next');

var playedSongs = [];

var audio = new Audio();

playerCover.style.height = "100%";

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
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `/server/music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
        } else {
            playerCover.src = '/server/music/cover/music.png';
            playerTitle.innerHTML = trackName;
        }
    } else {
        var path = `/server/music/${trackName}.mp3`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `/server/music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
        } else {
            playerCover.src = '/server/music/cover/music.png';
            playerTitle.innerHTML = trackName;
        }
    }
}

function playerCoverExists(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

function playBtn() {
    if (playerPlay.innerHTML == '<i class="bi bi-pause-circle-fill"></i>') {
        audio.pause();
        isPlaying = 0;
        playerPlay.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
    } else {
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
    }
}