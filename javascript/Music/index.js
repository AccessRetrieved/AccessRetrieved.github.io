var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');
var isPlaying = 0;
var playerCover = document.getElementById('player-cover');
var playerTitle = document.getElementById('player-title');

var playerPrevious = document.getElementById('player-previous');
var playerPlay = document.getElementById('player-play');
var playerNext = document.getElementById('player-next');
var player = document.getElementById('player');

var playerFullscreen = document.getElementById('player-fullscreen');
var playerFullscreenLyricsTitle = document.getElementById('player-fullscreen-lyrics');
var playerFullscreenLyrics = document.getElementById('player-lyrics')

var playedSongs = [];
var lyrics = "";

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
        var path = `https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        playerPlay.disabled = false;
        playedSongs.push(`https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`)

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
        }
    } else {
        var path = `https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`;
        audio.src = path;
        audio.play();
        isPlaying = 1;
        playerPlay.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
        playerPlay.disabled = false;
        playedSongs.push(`https://github.com/AccessRetrieved/server/blob/main/Music/${trackName}.mp3?raw=true`)

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
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
        playerPlay.disabled = false;

        var url = playerCoverExists(`https://accessretrieved.github.io/server/music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            playerFullscreenLyricsTitle.innerHTML = `歌词: ${trackName}`;
            playerFullscreenLyrics.readOnly = false;
            playerFullscreenLyrics.textContent = getText(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/lyrics/${trackName}.txt`)
        }
    }
}

const interval = setInterval(function() {
    if (playedSongs.length == 0 || playedSongs.length == 1) {
        playerPrevious.disabled = true;
    } else {
        playerPrevious.disabled = false;
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

function getText(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}