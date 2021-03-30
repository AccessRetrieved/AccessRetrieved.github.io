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
    'https://raw.githubusercontent.com/AccessRetrieved/server/main/Music/cover/飞鸟和蝉.png'
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
}, 3000);

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
    percent = Math.min(increment * element.currentTime * 2, 100);
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

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
  
  if (window.mobileAndTabletCheck() == true) {
    alert('Visit this page on a Mac or PC.\n使用Mac或PC查看此页面')
    window.location = 'about:blank';
  }

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