const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function createBoard() {
    const boardElement = document.getElementById("sudoku-board");
    initialBoard.forEach((row, rowIndex) => {
        row.forEach((num, colIndex) => {
            const input = document.createElement("input");
            input.type = "number";
            input.min = 1;
            input.max = 9;
            input.value = num === 0 ? '' : num;
            input.disabled = num !== 0; // Disable inputs for predefined numbers
            input.dataset.row = rowIndex;
            input.dataset.col = colIndex;
            boardElement.appendChild(input);
        });
    });
}

function checkSolution() {
    const inputs = document.querySelectorAll("input");
    const userBoard = Array.from({ length: 9 }, () => Array(9).fill(0));

    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        userBoard[row][col] = input.value ? parseInt(input.value) : 0;
    });

    if (JSON.stringify(userBoard) === JSON.stringify(initialBoard)) {
        alert("Congratulations! You've solved the Sudoku!");
    } else {
        alert("Try again!");
    }
}

window.onload = createBoard;
