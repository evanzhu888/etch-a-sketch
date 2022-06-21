const gridcontainer = document.querySelector('#gridcontainer');
let dim = 16;
let grid;
let gridArr;

function createGrid(rows) {
    let len = 500/rows;
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < rows; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.height = len + "px";
            cell.style.width = len + "px";

            row.appendChild(cell);    
        }
        gridcontainer.appendChild(row);

    }
    grid = document.querySelectorAll(".cell");
    gridArr = Array.from(grid);
    
    for (let i = 0; i < gridArr.length; i++) {
        gridArr[i].addEventListener("mouseover", () => {
            gridArr[i].style.background = "black";

        });
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateColor() {
    return "rgb(" + Math.floor(Math.random() * 255) + ", " 
        + Math.floor(Math.random() * 255) + ", " 
        + Math.floor(Math.random() * 255) +  ")";
}


let btn = document.querySelector("#resolution");
btn.addEventListener("click", () => {
    dim = prompt("Enter a value between 1 and 64:");
    while (dim > 64 || dim < 1) {
        dim = prompt("Invalid value. Enter a value between 1 and 164:");
    }
    removeAllChildNodes(gridcontainer);
    createGrid(dim);
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    removeAllChildNodes(gridcontainer);
    createGrid(dim);
});


let rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", () => {    
    for (let i = 0; i < gridArr.length; i++) {
        gridArr[i].removeEventListener("mouseover", () => {
            gridArr[i].style.background = "black";
        });
        gridArr[i].addEventListener("mouseover", () => {
            color = "rainbow";
            gridArr[i].style.background = generateColor();
        });
    }
});

createGrid(16);
