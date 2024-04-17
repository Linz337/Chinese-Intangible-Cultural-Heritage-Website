document.addEventListener("DOMContentLoaded", function () {
    // Get the container for the current date and time
    const dateTimeContainer = document.querySelector('.current-date-time');

    // Function to update date and time
    function updateDateTime() {
        const now = new Date(); // Get the current date and time
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formattedDateTime = now.toLocaleString('en-US', options); // Format date and time

        // Display formatted date and time in the container
        dateTimeContainer.textContent = formattedDateTime;
    }

    // Initial update
    updateDateTime();

    // Update every second
    setInterval(updateDateTime, 1000);
});


let currentSlide = 0; // 0-intro, 1-news

function slide(direction) {
    const container = document.querySelector('.main-content');
    const totalSlides = 2;
    if (direction === 'right' && currentSlide < totalSlides - 1) {
        currentSlide++;
    } else if (direction === 'left' && currentSlide > 0) {
        currentSlide--;
    }
    container.style.transform = `translateX(-${currentSlide * 50}%)`;
}

document.querySelector('.scroll-btn.left').addEventListener('click', () => slide('left'));
document.querySelector('.scroll-btn.right').addEventListener('click', () => slide('right'));


// // Get the video element
// const video = document.getElementById('myVideo');

// // Play the video
// video.play();

// // Pause the video
// video.pause();

// // Adjust the volume
// video.volume = 0.5; // Set volume to 50%

// // Jump to a specific time in the video
// video.currentTime = 30; // Jump to 30 seconds

// // Check if the video has ended
// video.addEventListener('ended', function () {
//     console.log('The video has ended');
// });

// // Listen for the play event
// video.addEventListener('play', function () {
//     console.log('The video has started playing');
// });

// // Listen for the pause event
// video.addEventListener('pause', function () {
//     console.log('The video has been paused');
// });
