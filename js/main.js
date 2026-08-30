// ===============================
// Happy Birthday Website
// main.js
// ===============================

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("❤️ Happy Birthday My Love ❤️");

    // Create floating hearts continuously
    createFloatingHearts();

    // Create sparkle effect on mouse movement
    document.addEventListener("mousemove", createSparkle);

});


// ===============================
// Floating Hearts
// ===============================

function createFloatingHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "-40px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.opacity = "0.9";

        document.body.appendChild(heart);

        let position = -40;
        let opacity = 1;

        const move = setInterval(() => {

            position += 2;
            opacity -= 0.01;

            heart.style.bottom = position + "px";
            heart.style.opacity = opacity;

            if (position > window.innerHeight || opacity <= 0) {

                clearInterval(move);
                heart.remove();

            }

        }, 30);

    }, 800);

}


// ===============================
// Mouse Sparkle Effect
// ===============================

function createSparkle(e) {

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = "16px";
    sparkle.style.zIndex = "9999";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 600);

}


// ===============================
// Fade Button Click
// ===============================

const startButton = document.querySelector(".startBtn");

if (startButton) {

    startButton.addEventListener("click", function () {

        document.body.style.transition = "opacity 0.8s";

        document.body.style.opacity = "0";

    });

}


// ===============================
// Page Fade In
// ===============================

window.onload = function () {

    document.body.style.opacity = "1";

};


// ===============================
// Disable Right Click (Optional)
// ===============================

// Uncomment if you don't want users
// to right-click on your website.

/*

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});

*/


// ===============================
// Birthday Greeting in Console
// ===============================

console.log(`
********************************************

🎉 HAPPY BIRTHDAY MY LOVE ❤️

Made with endless love by your wife.

********************************************
`);