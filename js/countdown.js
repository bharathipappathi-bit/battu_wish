// ==============================
// Birthday Countdown (UK Time)
// Birthday: 1 September 2026
// 12:00 AM Europe/London
// ==============================

// Change this only if the birthday changes
const birthday = new Date("2026-09-01T00:00:00+01:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const container = document.querySelector(".container");
const unlockScreen = document.getElementById("unlockScreen");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {

        clearInterval(timer);

        container.style.display = "none";

        unlockScreen.style.display = "flex";

        // Wait 5 seconds then open website
        setTimeout(function () {

            window.location.href = "welcome.html";

        }, 5000);

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = String(d).padStart(2, "0");
    hours.innerHTML = String(h).padStart(2, "0");
    minutes.innerHTML = String(m).padStart(2, "0");
    seconds.innerHTML = String(s).padStart(2, "0");

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);