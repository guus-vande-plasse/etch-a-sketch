//javascript file

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
    //change the color with mouseouver
    divFor.addEventListener("mouseover",changeColor)
    container.appendChild(divFor);
}
}
createGrid()
//create a function to change the color of the div
function changeColor(e) {
    const colorArray = ['white', 'yellow', 'red']
    const random = Math.floor(Math.random() * 3);
    console.log(random)
    const color = colorArray[random]
    console.log(color)
    e.target.style.backgroundColor = color;
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
    return prompt("Put in the number of elements you want on one row:")
}

//create a combined button function
// to get the dimension, remove the old divs from the grid, create the new grid
function btnFunction() {
    dimension = getGridDimension()
    removeDiv()
    createGrid()
}

//button eventlistener, trigger combining functions, remove divs and create a new grid
const btn = document.querySelector("#button")
btn.addEventListener("click", btnFunction)


