//javascript file

//create the grid
//select container
const container = document.querySelector('#grid-container')
// set the default width and height
let dimension = 16

//create and append the new div's
function createGrid() {
    //define the number of div's
    let numberOfDiv = dimension*dimension

    //set the number of columns and rows of the container
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    for(i=1; i <= numberOfDiv; i++){
    let divFor = document.createElement('div')
    divFor.setAttribute("id", i)
    //divFor.textContent = "-";
    //console.log(i)
    console.log("this is numberofDiv: " + numberOfDiv)
    divFor.addEventListener("mouseover",changeColor)
    container.appendChild(divFor);
}
}
createGrid()
//create a function to change the color of the div
function changeColor(e) {
e.target.setAttribute('style', 'background: white')
}

//create a function to remove all Divs from grid container
function removeDiv(){
    let gridcontainer = document.getElementById("grid-container")
    while (gridcontainer.firstChild){
        gridcontainer.removeChild(gridcontainer.firstChild)
    }
}

//create a function to get the gridDimension
function getGridDimension() {
    return prompt("Put in a grid:")
}

//create a combined button function
// to get the dimension, remove the old divs from the grid, create the new grid
function btnFunction() {
    dimension = getGridDimension()
    removeDiv()
    createGrid()
}

//button functions, remove divs and create a new grid
const btn = document.querySelector("#button")
console.log(btn)
btn.addEventListener("click", btnFunction)


