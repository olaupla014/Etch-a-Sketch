let isDrawing = false;
let isErasing = false;

let currentMode = "paint"


function newGrid(N){
    const content = document.querySelector("#container");

    const grid = document.createElement("div")
    grid.setAttribute("id", "grid")

    const TOTAL_SIZE = 600

    for (let i = 0; i < N; ++i){
        const row = document.createElement("div");
        row.classList.add("row")

        for (let j = 0; j < N; ++j){
            const square = document.createElement("div");
            square.classList.add("square")

            const squareSize = TOTAL_SIZE / N;
            square.style.width = squareSize + 'px';
            square.style.height = squareSize + 'px';

            row.appendChild(square)
        }

        grid.appendChild(row)
    }

    content.appendChild(grid)
}

function removeGrid(){
    const grid = document.querySelector("#grid");
    if (grid){
        grid.remove();
    }
}

function addPixelListeners(){
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
     square.addEventListener("mousemove", function(event){
        event.preventDefault();
        if (isDrawing){
            const square = event.target;
            square.classList.add("pixel");
        }

        if (isErasing){
            const square = event.target;
            square.classList.remove("pixel");
        }
     })
})
}


function fillGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.classList.add("pixel")
})
}

const gridButton = document.querySelector("#gridButton")
gridButton.addEventListener("click", function(event){
    let N = prompt("Type in the number of rows and columns!")
    removeGrid()

    if (N > 100){
        N = 50;
    }
    newGrid(N)
})

const erase = document.querySelector("#erase")
const paint = document.querySelector("#paint")

erase.addEventListener("click", function(event){
    currentMode = "erase"
    addPixelListeners()
})


paint.addEventListener("click", function(event){
   currentMode = "paint"
   addPixelListeners()
})

const fill = document.querySelector("#fill")
fill.addEventListener("click", function(event){
    fillGrid()
})

const del = document.querySelector("#delete")
del.addEventListener("click",function(e){
    removeGrid()
    newGrid(16)
})

document.addEventListener("mousedown", function(event){
    event.preventDefault();
    if (currentMode == "paint"){
        isDrawing = true;
    } else{
        isErasing = true;
    }
})

document.addEventListener("mouseup", function(e){
    isDrawing = false;
    isErasing = false;
})

newGrid(16)

