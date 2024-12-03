const gridContainer = document.getElementById("grid-container");
const gridSizeInput = document.getElementById("grid-size");
const updateGridButton = document.getElementById("update-grid");
const resetGridButton = document.getElementById("reset-grid");

function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear previous grid
    const squareSize = 960 / size; // Calculate size of each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-item");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.shade = 0; // Track darkness level

        square.addEventListener("mouseover", () => {
            let shade = parseInt(square.dataset.shade, 10);
            if (shade < 10) {
                shade += 1;
                square.dataset.shade = shade;
                const darkness = (shade / 10) * 100;
                square.style.backgroundColor = `rgb(${darkness}%, ${darkness}%, ${darkness}%)`;
            }
        });

        gridContainer.appendChild(square);
    }
}

// Initialize default grid
createGrid(64);

// Update grid size
updateGridButton.addEventListener("click", () => {
    const newSize = parseInt(gridSizeInput.value, 10);
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

// Reset grid
resetGridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-item");
    squares.forEach(square => {
        square.dataset.shade = 0;
        square.style.backgroundColor = "white";
    });
});
