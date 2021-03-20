var video = document.getElementById('player');
var overlay = document.getElementById('overlay');

var videoList = ['https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/banner_video2.69593fa5.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/banner_video1.4c74cc4e.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/1-1.98effe6c.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/1-2.a8ef0fea.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/1-3.951f0f8e.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/1-4.6d59e328.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/3.03d4fdee.mp4',
    'https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_home_web/medias/cul-3.be345881.mp4',
    ''];
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