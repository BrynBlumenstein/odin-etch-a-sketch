const grid = document.querySelector('#grid');
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add("square");
    grid.appendChild(square);
}