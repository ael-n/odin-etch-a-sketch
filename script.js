/* */

const divContainer = document.querySelector("#container");
createGrid(3, container);
hover()

/* Creer une nouvelle grille */

const button = document.querySelector("button");
button.addEventListener("click", event => {
    let gridPerSide = prompt(`Enter number of grid per side; `);
    if (gridPerside > 100) {
        alert("Invalid number! Please enter a number between 1 and 100.");
        return;
    }
    removeGrid(container);
    createGrid(gridPerSide, container);
    hover();

})


/* Fonction qui cree la grille */

function createGrid(gridPerside, container){

    for (let i = 0; i <= gridPerside; i++) {
        for (let j = 0; j <= gridPerside; j++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
        }
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    grid.style.background = "#" + randomColor;


}



