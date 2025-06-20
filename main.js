
function newGrid(N){
    const content = document.querySelector("#container");
    const grid = document.createElement("div")
    grid.setAttribute("id", "grid")

    const totalSize = 600
    const gap = 1

    for (let i = 0; i < N; ++i){
        const row = document.createElement("div");
        row.classList.add("row")

        for (let j = 0; j < N; ++j){
            const square = document.createElement("div");
            square.classList.add("square")

            const squareSize = totalSize / N;
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';

            row.appendChild(square)
        }

        grid.appendChild(row)
    }

    content.appendChild(grid)
}

function removeGrid(){
    const content = document.querySelector("#container");
    const grid = document.querySelector("#grid");
    content.removeChild(grid)
}

function addPixelEfect(){
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
     square.addEventListener("mouseenter", function(event){
        const square = event.target;
        square.classList.add("pixel")
     })
})
}

const grid = document.querySelector("#gridButton")
grid.addEventListener("click", function(event){
    let N = prompt("Type in the number of rows and columns!")
    removeGrid()

    if (N >= 100){
        N = 50;
    }
    newGrid(N)
    addPixelEfect()
})

newGrid(16)
addPixelEfect()

