document.addEventListener("DOMContentLoaded", function () {
    // Get the video element and control buttons
    const video = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const muteButton = document.getElementById('muteButton');
    const volumeSlider = document.getElementById('volumeSlider');

    // Play video
    playButton.addEventListener('click', function () {
        video.play();
    });

    // Pause video
    pauseButton.addEventListener('click', function () {
        video.pause();
    });

    // Mute or unmute video
    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
    });

    // Adjust volume
    volumeSlider.addEventListener('input', function () {
        video.volume = volumeSlider.value;
    });
});
