function doggi() {
    var x = document.getElementById("myAudio");
    if(x.paused) {
        x.play()
    } else {
        x.pause();
    }
}