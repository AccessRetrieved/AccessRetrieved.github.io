var video = document.getElementById('player');
var overlay = document.getElementById('overlay');

var videoList = ['https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/banner_video3.3ce510ed.mp4', 'https://accessretrieved.github.io/project-pios/Resources/timer.mov'];
var videoPlayedList = [];

function playVideo() {
    const item = videoList[Math.floor(Math.random() * videoList.length)];
    videoPlayedList.push(item);
    video.src = item;
    video.load();
    video.play();
    console.log(videoPlayedList);
}

video.addEventListener('ended', endHandler, false);

function endHandler(e) {
    playVideo()
}

function pauseVideo() {
    if (video.paused === true) {
        video.play();
        overlay.style.display = "none";
        video.style.filter = "grayscale(0%)";
        video.style.opacity = "1.0";
    } else {
        video.pause();
        overlay.style.display = "block";
        video.style.filter = "grayscale(75%)";
        video.style.opacity = "0.2";
    }
}

function previousVideo() {
    if (videoPlayedList.length < 2) {
        var win = window.open('', '', 'width=100, height=100');
        win.document.write('This is the last video.');
        win.focus()
        setTimeout(function() {win.close();}, 1500)
    } else {
        var last = videoPlayedList[videoPlayedList.length - 2]
        video.src = last;
        video.load();
        video.play();
    }
}