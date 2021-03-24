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