const grid = document.querySelector('#grid');
const newGridButton = document.querySelector('#create-new');

generateGrid(100);

newGridButton.addEventListener('click', () => {
    let squaresPerRow = getSquaresPerRow();
    generateGrid(squaresPerRow);
});

function getSquaresPerRow() {
    let squaresPerRow;

    do {
        squaresPerRow = prompt('Enter the number of squares per row (1-100)');
        squaresPerRow = parseInt(squaresPerRow);
    } while (isNaN(squaresPerRow) || squaresPerRow < 1 || squaresPerRow > 100);

    return squaresPerRow;
}

function generateGrid(squaresPerRow) {
    grid.innerHTML = '';

    const squares = squaresPerRow**2

    for (let i = 0; i < squares; i++) {
        let square = document.createElement('div');

        square.classList.add('square');
        square.style.width = `calc(100% / ${squaresPerRow})`;
        square.style.height = `calc(100% / ${squaresPerRow})`;
        square.addEventListener('mouseover', () => square.style.backgroundColor = 'black');

        grid.appendChild(square);
    }
}