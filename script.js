// -------------------- Click Game --------------------
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

// -------------------- Memory Game --------------------
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

// -------------------- Puzzle Game (3x3 Sliding Tile) --------------------
function startPuzzle() {
    alert("Welcome to the 3x3 Puzzle Game!\nArrange numbers 1-8 in order. Use prompts to move tiles.");

    // Initialize puzzle
    let puzzle = [1,2,3,4,5,6,7,8,0]; // 0 is empty
    shuffleArray(puzzle);

    while(true) {
        let display = puzzle.map(n => n===0 ? " " : n).join(" | ");
        let move = prompt("Current puzzle:\n" + display + "\nEnter number to move (0 to quit):");
        if(move == "0" || move === null) break;

        let num = parseInt(move);
        let idx = puzzle.indexOf(num);
        let emptyIdx = puzzle.indexOf(0);

        // Check if move is valid (adjacent to empty)
        if(isAdjacent(idx, emptyIdx)) {
            puzzle[emptyIdx] = num;
            puzzle[idx] = 0;
        } else {
            alert("Invalid move! Try a number adjacent to empty space.");
        }

        if(isSolved(puzzle)) {
            alert("🎉 Congratulations! You solved the puzzle!");
            break;
        }
    }
}

// -------------------- Helper Functions --------------------
function shuffleArray(array) {
    for (let i=array.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isAdjacent(i,j) {
    const adj = [
        [0,1],[0,3],[1,0],[1,2],[1,4],[2,1],[2,5],
        [3,0],[3,4],[3,6],[4,1],[4,3],[4,5],[4,7],
        [5,2],[5,4],[5,8],[6,3],[6,7],[7,4],[7,6],[7,8],[8,5],[8,7]
    ];
    return adj.some(pair => (pair[0]===i && pair[1]===j) || (pair[0]===j && pair[1]===i));
}

function isSolved(puzzle) {
    for(let i=0;i<8;i++) if(puzzle[i] !== i+1) return false;
    return puzzle[8] === 0;
}
