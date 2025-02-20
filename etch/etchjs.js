//ETCH A SKETCH JAVASCRIPT CODE//


let gridSize = 32; //grid size variable to be edited by user
let boxes = gridSize*gridSize; //square to create appropriate div count
const createBtn = document.getElementById("create");
const clearBtn = document.getElementById("clear");
const description = document.getElementById("creation-text");
const grabInput = document.getElementById("input");

function fillContainer() {
    const container = document.getElementById("container"); //container for boxes
    container.innerHTML = ''; //clear container on resize
    let cWidth = container.clientWidth - 4 //get container width in px 
    let boxWidth = cWidth/gridSize  //calc box width
    let boxPx = boxWidth + "px"; //convert box width to px

    // GENERATE THE NUMBER OF BOXES BASED ON SIZE //
    for (i = 0; i < boxes; i++) {
        const divx = document.createElement("div");
        divx.className = "divx";
        divx.style.width = boxPx; 
        divx.style.height = boxPx;
        divx.style.backgroundColor = "lightgray"; 
        container.appendChild(divx);
        divx.addEventListener("mouseover", () => {
            divx.style.backgroundColor = "teal";
        })
        divx.addEventListener("click", () => {
            divx.style.backgroundColor = "greenyellow";
        })
    }
    description.textContent = `${gridSize} x ${gridSize} grid created!`
}

fillContainer(); //initial grid population

createBtn.addEventListener("click", () => { 
    let newSize = grabInput.value;

    //if exception, throw original grid, if no exception throw new grid
    if (newSize < 0 || newSize > 100 || newSize%1 !== 0 || newSize == "") {
        gridSize = 32;
        boxes = gridSize*gridSize
        fillContainer();
        description.textContent = "Choose a number up to 100 (no decimals)!";
    } else {
        gridSize = newSize;
        boxes = newSize*newSize;
        fillContainer();
    }
    grabInput.value = "";
});

clearBtn.addEventListener("click",() =>{
    fillContainer(); //fills with values from most recent fill
});