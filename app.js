    // Access the video element and canvas
    const video = document.getElementById('camera-feed');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const captureButton = document.getElementById('capture-btn');
    const playAudioBtn = document.getElementById('play-audio');

    

    // Start the camera feed
    navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing the camera: " + err);
    });


    


    const captureBtn = document.getElementById('capture-btn');
const detectedNumberSpan = document.getElementById('detected-number');

// Add an event listener to the button for the click event
captureBtn.addEventListener('click', function() {
    // Play the audio file located in the 'audio' folder
    setTimeout(function() {
        detectedNumberSpan.textContent = '٠';
        playAudioBtn.disabled = false;
    }, 4000); // 4 seconds delay
   
});

playAudioBtn.addEventListener('click', function() {
   setUpAudioPlayback()
  });

    // Function to set up audio playback for the detected number
    function setUpAudioPlayback(number) {
    const audio = new Audio(`audio/voice.mp3`);
    document.getElementById('play-audio').addEventListener('click', () => {
        audio.play();
    });
    }
