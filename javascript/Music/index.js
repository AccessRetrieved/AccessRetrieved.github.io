var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');
var isPlaying = 0;
var playerCover = document.getElementById('player-cover');
var playerTitle = document.getElementById('player-title');
var fullscreenCover = document.getElementById('fullscreen-cover');
var fullscreenTitle = document.getElementById('fullscreen-title');

var playerPrevious = document.getElementById('player-previous');
var playerPlay = document.getElementById('player-play');
var playerNext = document.getElementById('player-next');
var player = document.getElementById('player');
var playerFullscreen = document.getElementById('player-fullscreen');

var fullscreenPrevious = document.getElementById('fullscreen-previous');
var fullscreenPlay = document.getElementById('fullscreen-play');
var fullscreenNext = document.getElementById('fullscreen-next');

var playedSongs = [];
var audio = new Audio();

var timer;
var percent = 0;

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
        var path = `https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        fullscreenPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        playerPlay.disabled = false;
        fullscreenPlay.disabled = false
        playedSongs.push(`https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`)

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        }
    } else {
        var path = `https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        fullscreenPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        playerPlay.disabled = false;
        fullscreenPlay.disabled = false
        playedSongs.push(`https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`)

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        }
    }
}

function playerCoverExists(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

function playBtn() {
    if (playerPlay.innerHTML == '<i class="bi bi-pause-circle-fill"></i>' || fullscreenPlay.innerHTML == '<i class="bi bi-pause-circle-fill"></i>') {
        audio.pause();
        isPlaying = 0;
        playerPlay.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
        fullscreenPlay.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
    } else {
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        fullscreenPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
    }
}

function playPrevious() {
    if (playedSongs.length == 0 || playedSongs.length == 1) {
        // pass
    } else {
        audio.pause();
        isPlaying = 0;

        playedSongs.pop();
        var fil1 = playedSongs[playedSongs.length - 1].replace('https://github.com/AccessRetrieved/server/blob/main/Music/', '');
        var trackName = fil1.replace('.mp3?raw=true', '');

        audio.src = `https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        fullscreenPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        playerPlay.disabled = false;
        fullscreenPlay.disabled = false

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        }
    }
}

const interval = setInterval(function() {
    if (playedSongs.length == 0 || playedSongs.length == 1) {
        playerPrevious.disabled = true;
        fullscreenPrevious.disabled = true;
    } else {
        playerPrevious.disabled = false;
        fullscreenPrevious.disabled = false;
    }
}, 1)

function fullscreen() {
    player.style.display = "none";
    playerFullscreen.style.display = "block";
}

function closeFullscreen() {
    player.style.display = "block";
    playerFullscreen.style.display = "none";
}

audio.addEventListener('playing', function(_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
});
audio.addEventListener('pause', function(_event) {
    clearTimeout(timer);
})
var advance = function(duration, element) {
    var progress = document.getElementById('progress');
    increment = 10/duration
    percent = Math.min(increment * element.currentTime * 10, 100);
    progress.style.width = percent + '%';
    startTimer(duration, element);
}
var startTimer = function(duration, element) {
    if (percent < 100) {
        timer = setTimeout(function() {advance(duration, element)}, 100);
    }
}

