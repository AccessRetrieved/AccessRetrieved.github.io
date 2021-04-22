// Preload images. Add link to here when adding a new song
preloadImages([
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Infinite.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Suit-And-Tie.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/TA.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/你曾是少年.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/冲吧少年.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/无解.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/气象站台.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/清空.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/A-Thousand-Years.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/AMillionYears.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Someone-You-Loved.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/水.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/River-Flows-In-You.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/少年.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/飞鸟和蝉.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Rewrite-The-Stars.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/A-Sky-Full-Of-Stars.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/wave.gif',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/十年.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Lover.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Celebrity.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/Batman-Evolution.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/大梦想家.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/如一.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/慢热.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/察觉.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/淋雨一直走.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/大雨还在下.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/煎熬.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/His-Theme.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/八小时时差.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/恋爱ing.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/像女孩的女人.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/勇气.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/The-Dawn.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/The-Kings-Speech.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/花之舞.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/所念皆星河.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/7710.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/The-Dawn.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/来迟.png',
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/一分钟恋人.png'
], function() {
    console.log('Successfully loaded all images')
})

var body = document.getElementById('body');
var accountPopup = document.getElementById('profile-popup');
var avatar = document.getElementById('avatar');
var isPlaying = 0;
var playerCover = document.getElementById('player-cover');
var playerTitle = document.getElementById('player-title');
var fullscreenCover = document.getElementById('fullscreen-cover');
var fullscreenTitle = document.getElementById('fullscreen-title');
var counter

var playerPrevious = document.getElementById('player-previous');
var playerPlay = document.getElementById('player-play');
var playerNext = document.getElementById('player-next');
var player = document.getElementById('player');
var playerFullscreen = document.getElementById('player-fullscreen');
var playerVolume = document.getElementById('player-volume');

var fullscreenPrevious = document.getElementById('fullscreen-previous');
var fullscreenPlay = document.getElementById('fullscreen-play');
var fullscreenNext = document.getElementById('fullscreen-next');
var fullscreenShare = document.getElementById('fullscreen-share');

var progressBar = document.getElementById('slider');

var playedSongs = [];
var audio = new Audio();

var timer;
var percent = 0;

playerCover.style.height = "100%";

function showAccountPopup() {
    accountPopup.style.display = "block";
}

function preloadImages(urls, allImagesLoadedCallback){
    var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function(url){
    preloadImage(url, function(){
        loadedCounter++;
            console.log('Loading image: ' + loadedCounter);
      if(loadedCounter == toBeLoadedNumber){
        allImagesLoadedCallback();
      }
    });
  });

  function preloadImage(url, anImageLoadedCallback){
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
  }
}

const progress = setTimeout(function() {
    progressBar.style.display = "none";
}, 5000);

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

        var url = playerCoverExists(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
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

        var url = playerCoverExists(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
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

        var url = playerCoverExists(`https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`);
        if (url == true) {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/${trackName}.png`;
            fullscreenTitle.innerHTML = trackName;
        } else {
            playerCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
            playerTitle.innerHTML = trackName;
            fullscreenCover.src = `https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/music.png`;
            fullscreenTitle.innerHTML = trackName;
        }
    }
}

function share() {
    if (navigator.share) {
        navigator.share({
            title: 'Oh My Music',
            text: '查看Oh My Music',
            url: window.location.href,
        })
        .then(() => console.log('success'))
        .catch((error) => console.log(`error: ${error}`))
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
    percent = Math.min(increment * element.currentTime * 1, 100);
    progress.style.width = percent + '%';
    startTimer(duration, element);
}
var startTimer = function(duration, element) {
    if (percent < 100) {
        timer = setTimeout(function() {advance(duration, element)}, 100);
    }
}

document.body.addEventListener('keypress', function(e) {
    if (e.key === "Escape") {
        closeFullscreen();
    }
})

function volume() {
    if (audio.volume == 1.0) {
        audio.volume = 0;
        playerVolume.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';
    } else {
        audio.volume = 1.0;
        playerVolume.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
    }
}

function closeIntro() {
    document.getElementById('intro').style.display = "none"
}