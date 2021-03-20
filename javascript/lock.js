$( ".lock" ).click(function() {
    $(this).toggleClass('unlocked');
    var lock = document.getElementById('lock');
    var background = document.getElementById('lockPage');
    var launch = document.getElementById('launchBtn');
    setTimeout(function() {lock.style.display="none";}, 500);

    background.style.width = "50%";
    background.style.height = "50%";
    background.style.width = "20%";
    background.style.height = "20%";
    background.style.width = "10%";
    background.style.height = "10%";
    background.style.position = "absolute";
    background.style.left = "45%";
    background.style.top = "35%"
    
    setTimeout(function() {
        launch.style.display = "block";
        launch.style.position = "absolute";
        launch.style.top = "30%";
        launch.style.left = "20%";
    }, 550);
});