function startClick() {
    let clicks = 0;
    let maxClicks = 10;
    alert("Click OK " + maxClicks + " times to win! 👍");
    while (clicks < maxClicks) {
        clicks++;
        alert("Clicked " + clicks + " times! 🖱️");
    }
    alert("Congratulations! 🎉 You've finished the game!");
}

function startMemoryGame() {
    const colors = ["red", "blue", "green", "yellow"];
    let sequence = [];
    let userSequence = [];
    let level = 1;

    // Generate a random sequence
    for (let i = 0; i < level; i++) {
        sequence.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    // Show the sequence to the user
    alert("Memorize this sequence:\n" + sequence.join(", "));

    // Ask the user to repeat the sequence
    let answer = prompt("Enter the sequence (comma separated):").replace(/\s/g, "");
    userSequence = answer.split(",");

    // Check if the user got it right
    if (userSequence.join(",") === sequence.join(",")) {
        alert("Correct! 🎉");
    } else {
        alert("Oops! Try again. The correct sequence was: " + sequence.join(", "));
    }
}
