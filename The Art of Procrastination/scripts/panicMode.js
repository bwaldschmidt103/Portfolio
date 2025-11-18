document.addEventListener("DOMContentLoaded", function() {
    let buzzerSound = new Audio("./sounds/buzzer.mp3");
    let timerElement = document.getElementById("countdown-timer");
    let startButton = document.getElementById("start-btn");
    let resetButton = document.getElementById("reset-btn");    
    let stopButton = document.getElementById("stop-btn");
    let audio = document.getElementById("myAudio");
    let timeLeft = 10;
    let timerInterval;
    let isPaused = false;

    // 🔹 Play buzzer sound ONLY when user clicks the start button
    startButton.addEventListener("click", function() {
        if (audio) {
            audio.play().catch(error => console.error("Playback failed:", error));
            setTimeout(() => {
                audio.pause();
            }, 500);
        } else {
            console.error("Audio element not found!");
        }
    });

    function countdownTimer() {
        timerElement.textContent = timeLeft;

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timerElement.textContent = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                timeLeft--;
            } else {
                timerElement.textContent = "🚨 00 🚨";
                timerElement.classList.add("time-up");
                clearInterval(timerInterval);

                // ✅ Step #2: Ensure Volume Isn’t 0
                buzzerSound.volume = 1.0;

                // ✅ Step #3: Play Buzzer When Time Runs Out
                buzzerSound.play().catch(error => console.error("Playback failed:", error));
            }
        }, 1000);
    }

    startButton.addEventListener("click", function() {
        if (isPaused) {
            isPaused = false; // 🔹 Unpause
            countdownTimer(); // 🔹 Resume countdown from the last timeLeft value
        } else if (!timerInterval) { // 🔹 Prevent multiple intervals from starting
            timeLeft = 10; // Reset countdown
            countdownTimer();
        }
    });

    stopButton.addEventListener("click", function() {
        clearInterval(timerInterval);
        timerInterval = null; // 🔹 Ensures no new intervals are running
        isPaused = true;
    });

    resetButton.addEventListener("click", function() {
        clearInterval(timerInterval);
        timerInterval = null;
        timerElement.classList.remove("time-up");
        timeLeft = 10;
        isPaused = false;
        countdownTimer();
    });

    countdownTimer();
});
