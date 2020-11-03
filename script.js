const div = document.createElement("div");
const containerDiv1 = document.querySelector("#container1");
const containerDiv2 = document.querySelector("#container2");
const containerDiv3 = document.querySelector("#container3");

function createGrid() {
    for(i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-color");
        containerDiv1.appendChild(div);
    }

    for(i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-color");
        containerDiv2.appendChild(div);
    }

    for(i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-color");
        containerDiv3.appendChild(div);
    }
};

createGrid();

// To create next:
// 1. create 16 container divs with id="container"
// 2. create variable with array of container divs
// 3. run for each statement to create 16 divs with class of grid-color

