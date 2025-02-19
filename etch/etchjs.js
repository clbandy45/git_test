//ETCH A SKETCH JAVASCRIPT CODE//


let gridSize = 16; //grid size variable to be edited by user
let boxes = gridSize*gridSize; //square to create appropriate div count


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
        container.appendChild(divx);
    }
    console.log(`${gridSize} x ${gridSize} grid created!`)
}

fillContainer();

