/* */

const divContainer = document.querySelector("#container");
craeteGrid(3, container);
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

}



