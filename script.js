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

// -------------------- Continuous Memory Game --------------------
function startMemoryGame() {
    const colors = ["red", "blue", "green", "yellow"];
    let sequence = [];
    let level = 1;
    let gameOver = false;

    alert("Welcome to the Memory Game! Memorize the sequence and repeat it. 🎯");

    while (!gameOver) {
        // Add a new random color each level
        sequence.push(colors[Math.floor(Math.random() * colors.length)]);

        // Show the sequence to the user
        alert("Level " + level + ":\n" + sequence.join(", "));

        // Ask user to repeat sequence
        let answer = prompt("Enter the sequence (comma separated):");
        if (answer === null) {
            alert("Game exited!");
            break;
        }

        let userSequence = answer.replace(/\s/g, "").split(",");

        // Check if user got it right
        if (userSequence.join(",") === sequence.join(",")) {
            alert("Correct! 🎉 Get ready for the next level!");
            level++;
        } else {
            alert("Oops! Wrong sequence. 😢\nCorrect sequence was: " + sequence.join(", "));
            gameOver = true;
        }
    }

    alert("Game Over! You reached Level " + level);
}

// -------------------- Visual 3x3 Puzzle Game --------------------
let puzzle = [];
const puzzleGrid = document.getElementById("puzzle-grid");

function startPuzzleVisual() {
    // Initialize puzzle array 1-8 + 0 for empty
    puzzle = [1,2,3,4,5,6,7,8,0];
    shuffleArray(puzzle);
    renderPuzzle();
}

// Render puzzle on page
function renderPuzzle() {
    puzzleGrid.innerHTML = "";
    puzzle.forEach((num, idx) => {
        const tile = document.createElement("div");
        tile.classList.add("puzzle-tile");
        if(num === 0) tile.classList.add("puzzle-empty");
        else tile.textContent = num;

        tile.addEventListener("click", () => moveTile(idx));
        puzzleGrid.appendChild(tile);
    });
}

// Move a tile if adjacent to empty
function moveTile(idx) {
    const emptyIdx = puzzle.indexOf(0);
    if(isAdjacent(idx, emptyIdx)) {
        [puzzle[idx], puzzle[emptyIdx]] = [puzzle[emptyIdx], puzzle[idx]];
        renderPuzzle();
        if(isSolved(puzzle)) {
            setTimeout(() => alert("🎉 Congratulations! You solved the puzzle!"), 100);
        }
    }
}

// Check adjacency in 3x3 grid
function isAdjacent(i,j) {
    const adj = [
        [0,1],[0,3],[1,0],[1,2],[1,4],[2,1],[2,5],
        [3,0],[3,4],[3,6],[4,1],[4,3],[4,5],[4,7],
        [5,2],[5,4],[5,8],[6,3],[6,7],[7,4],[7,6],[7,8],[8,5],[8,7]
    ];
    return adj.some(pair => (pair[0]===i && pair[1]===j) || (pair[0]===j && pair[1]===i));
}

// Check if puzzle solved
function isSolved(puzzle) {
    for(let i=0;i<8;i++) if(puzzle[i] !== i+1) return false;
    return puzzle[8] === 0;
}

// -------------------- Helper: Shuffle Array --------------------
function shuffleArray(array) {
    for (let i=array.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

