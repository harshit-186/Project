
function celebrate() {

    const surprise = document.getElementById("surprise");

    surprise.innerHTML = `
        🎂🎉🎈 HAPPY BIRTHDAY @! 🎈🎉🎂
        <br><br>
     🥰 You Always be my Desire! 💕 
    `;

    createConfetti();
}


// Create confetti
function createConfetti() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "💕";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}

