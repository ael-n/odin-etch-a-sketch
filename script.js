const container = document.querySelector("#container");
createGrid(3, container);
hover();

const button = document.querySelector("button");
button.addEventListener("click", event => {
    let gridPerSide = prompt(`Enter number of grid per side (1-100): `);

    if (isNaN(gridPerSide) || gridPerSide > 100 || gridPerSide < 1) {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }
    
    removeGrid(container);
    createGrid(gridPerSide, container);
    hover();
})

function createGrid(gridPerside, container){
    let containerWidth = parseInt(window.getComputedStyle(container).width);
    let gridSize = (containerWidth / gridPerside) - 2;
    
    for (let i = 0; i < gridPerside; i++) {
        for (let j = 0; j < gridPerside; j++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = gridSize + "px";
            grid.style.height = gridSize + "px";
            
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            grid.style.backgroundColor = "#" + randomColor;
            grid.style.opacity = "0";
            
            container.appendChild(grid); 
        } 
    }
    
    console.log("Grid created " + gridPerside + "x" + gridPerside);
}

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function hover() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        let currentOpacity = 0;
        
        grid.addEventListener("mouseover", event => {
            currentOpacity = Math.min(currentOpacity + 0.1, 1);
            grid.style.opacity = currentOpacity;
        });
    });
}