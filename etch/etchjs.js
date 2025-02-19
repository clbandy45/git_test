//ETCH A SKETCH JAVASCRIPT CODE//

const container = document.getElementById("container"); //container for boxes
let size = 11; //variable to be edited by user
let boxes = size*size; //square to create appropriate div count
let cWidth = container.clientWidth; //get container width in px
let boxWidth = cWidth/size + "px"; //calc box width in px


// GENERATE THE NUMBER OF BOXES BASED ON SIZE //
for (i = 0; i < boxes; i++) {
    const divx = document.createElement("div");
    divx.className = "divx";
    divx.style.width = boxWidth; //height set in CSS with aspect-ratio: 1/1;
    container.appendChild(divx);
}

