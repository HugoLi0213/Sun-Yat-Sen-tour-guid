function playAudio(id) {
    var audio = document.getElementById(id);
    var audios = document.querySelectorAll('audio');
    
    audios.forEach(function(a) {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
