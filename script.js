document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.getElementById("enterBtn");

    // 🎮 If "Press Start" is clicked, redirect to About Me
    if (enterBtn) {
        enterBtn.addEventListener("click", function () {
            const landingPage = document.querySelector(".landing-page");
            landingPage.style.opacity = "0"; // Fade out effect
            setTimeout(() => {
                window.location.href = "about.html"; // Redirect after fade
            }, 500); // Wait 0.5s for fade effect to complete
        });
    }

        window.showDetails = function (player) {
        const details = document.getElementById("player-details");
        const title = document.getElementById("player-title");
        const description = document.getElementById("player-description");
        const imagesContainer = document.getElementById("player-images");
        const selectSound = document.getElementById("select-sound");

        // Play sound when selecting a player
        if (selectSound) {
            selectSound.currentTime = 0; // Reset sound
            selectSound.play();
        }

        // Remove flicker effect from all players
        document.querySelectorAll(".player-frame").forEach(frame => {
            frame.classList.remove("flicker");
        });

        // Add flicker effect to selected player
        document.querySelector(`[onclick="showDetails('${player}')"]`).classList.add("flicker");

        const playersData = {
            "artsy": {
                title: "🎨 Artsy Aamina",
                description: "The creative visionary! Always crafting, drawing, bullet journaling, and capturing life through a camera lens.",
                images: ["assets/artsy1.png", "assets/artsy2.png", "assets/artsy3.png",  "assets/artsy4.png"]
            },
            "adventurer": {
                title: "🗺️ Adventurer Aamina",
                description: "The thrill-seeker! Always on the move, trying new foods, traveling, going to concerts, and making the most of life.",
                images: ["assets/adventurer1.png", "assets/adventurer2.png", "assets/adventurer3.png",  "assets/adventurer4.png"]
            },
            "zen": {
                title: "🌿 Zen Aamina",
                description: "The peaceful soul! Loves slow mornings, deep convos, journaling, and finding joy in the little things.",
                images: ["assets/zen1.png", "assets/zen2.png", "assets/zen3.png",  "assets/zen4.png"]
            }
        };

        title.innerText = playersData[player].title;
        description.innerText = playersData[player].description;

        details.classList.remove("hidden"); // Show details
    };

    if (sendButton) {
        sendButton.addEventListener("click", function () {
            alert("📨 Message sent! Check your inbox for confirmation.");
        });
    }
    
    
    // 🎮 Add Pixel Sprites and Animate Them
    const spriteContainer = document.getElementById("pixel-sprites");

    if (spriteContainer) {
        const spriteImages = [
            'assets/controller.png',
            'assets/sparkle.png',
            'assets/fairy.png',
        ];

        spriteImages.forEach((src, index) => {
            let sprite = document.createElement("div");
            sprite.classList.add("pixel-sprite");
            sprite.style.backgroundImage = `url(${src})`;
            sprite.style.top = `${Math.random() * 30 + 20}px`; // Random vertical position
            sprite.style.animationDelay = `${index * 3}s`; // Staggered start times
            spriteContainer.appendChild(sprite);
        });
    }
});
