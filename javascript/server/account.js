var checkInterval = 0;
var checked = 1;

function updateSettings() {
    $('#myModal').modal('hide')
    if (document.getElementById('offlineCheck').checked) {
        checked = 1;

        document.getElementById('success').innerHTML = '\
        <div class="alert alert-success alert-dismissible" id="success">\
            <button type="button" class="close" data-dismiss="alert">&times;</button>\
            更新成功!\
        </div>\
        '

        setTimeout(function() {
            document.getElementById('success').innerHTML = "";
        }, 5000)
    } else {
        checked = 0;
    }
}

const interval = setInterval(function() {
    if (navigator.onLine == false && checkInterval == 0 && checked == 1) {
        alert("无法连接服务器，请重新连接");
        checkInterval = 1;

        document.body.innerHTML = "";
        
        document.write('\
        <html>\
            <head>\
                <link rel="stylesheet" href="/css/main.css">\
                <link rel="stylesheet" href="/css/network_error.css">\
                <link rel="stylesheet" href="/css/bootstrap/bootstrap_main.css">\
                <title>Network Error</title>\
            </head>\
            <body>\
                <div class="page-content">\
                    <p>无法连接服务器，请重新连接</p>\
                    <br><br>\
                    <button onclick="retryConnection()" style="width: 60%;" class="btn btn-warning">重试</button>\
                </div>\
            </body>\
            <script src="/javascript/network_error.js"></script>\
        </html>\
        ')

    } else {
        // pass
    }
}, 100)

const query = window.location.search

if (query == "?email=2140473296&password=-1274958547") {
    //pass
} else {
    window.location = 'https://accessretrieved.github.io/signin.html'
}

var i = 0;
function move() {
if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
    if (width >= 100) {
        clearInterval(id);
        i = 0;
    } else {
        width++;
        elem.style.width = width + "%";
    }
    }
}
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

function openMusic() {
    $('#myModal').modal('hide')
    $('#myModal').on('hidden.bs.modal', function () {
        $('#languageModal').modal('show')
    })
}

const waitforUpdate = setInterval(function() {
    var update = document.getElementById('updateNotice');
    const httpS = new XMLHttpRequest()
    httpS.open("GET", "https://raw.githubusercontent.com/Project-Pios/Project-Pios/main/version.txt");
    httpS.send()
    httpS.onload = () => console.log(`v${httpS.response}`);
    document.getElementById('updateBox').style.display = "none";
    update.classList.remove('alert-info');
    update.classList.add('alert-success');
    document.getElementById('updateNotice').innerHTML = `\
    <button type="button" class="close" data-dismiss="alert">&times;</button>\
	更新完毕   <svg t="1616914377162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2631" width="20" height="20"><path d="M512 64c247.424 0 448 200.576 448 448s-200.576 448-448 448S64 759.424 64 512 264.576 64 512 64z m261.696 265.376a32 32 0 0 0-42.24-2.656l-3.04 2.656-296.896 296.864-120.896-120.864a32 32 0 0 0-47.904 42.24l2.656 3.008 135.776 135.776a31.936 31.936 0 0 0 14.336 8.288 32 32 0 0 0 38.464-0.64l2.944-2.624 316.8-316.8a32 32 0 0 0 0-45.248z" fill="#2aa515" p-id="2632"></path></svg>\
    `;
    clearInterval(waitfor)
}, 157000)