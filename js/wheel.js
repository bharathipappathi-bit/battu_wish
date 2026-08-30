// ================================
// Love Wheel
// ================================

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");
const prizeText = document.getElementById("prizeText");

// 8 prizes (same order as wheel.html)
const prizes = [
    "❤️ 100 Kisses",
    "🤗 Unlimited Hugs",
    "🍫 Chocolate Date",
    "🍿 Movie Night",
    "🌹 Romantic Dinner",
    "🚗 Long Drive",
    "🎁 Secret Surprise",
    "💍 Forever Together"
];

let spinning = false;
let currentRotation = 0;

spinBtn.addEventListener("click", spinWheel);

function spinWheel() {

    if (spinning) return;

    spinning = true;

    spinBtn.disabled = true;
    spinBtn.innerHTML = "🎡 Spinning...";

    result.style.display = "none";

    // Random prize
    const prizeIndex = Math.floor(Math.random() * prizes.length);

    // Each section = 45°
    const anglePerSection = 45;

    // Many full spins
    const extraSpins = 360 * 6;

    // Calculate stopping angle
    const stopAngle = (360 - (prizeIndex * anglePerSection)) % 360;

    currentRotation += extraSpins + stopAngle;

    wheel.style.transform = "rotate(" + currentRotation + "deg)";

    setTimeout(function () {

        prizeText.innerHTML = prizes[prizeIndex];

        result.style.display = "block";

        spinBtn.disabled = false;
        spinBtn.innerHTML = "🔄 Spin Again";

        spinning = false;

    }, 6000);

}