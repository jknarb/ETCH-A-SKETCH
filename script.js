const div = document.createElement("div");
const containerDiv = document.querySelector("#container");

function createGrid(e) {
    const size = e;
    console.log(size);
    const createGridSize = size*size;
    const divSize = 100/size;
    console.log(divSize);

    for(i = 0; i < createGridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = divSize+"%";
        div.style.height = divSize+"%";
        containerDiv.appendChild(div);
    }

    const grids = document.querySelectorAll(`div[class="grid"]`);

    grids.forEach(function (grid) {
        grid.addEventListener("mouseover", () => {
            let randomNumberGen = Math.floor(Math.random()*255) + 1
            const randomNumbersArr = [];
            for(i = 0; i < 3; i++) {
                randomNumbersArr.push(randomNumberGen);
                randomNumberGen = Math.floor(Math.random()*255) + 1
            }

            let rgbValue = "rgb("+randomNumbersArr.toString()+")";
            grid.style.backgroundColor = rgbValue;
        });
    });

};


    

const resetButton = document.querySelector(`button[name="resetButton"]`);

resetButton.addEventListener("click", function reset(){
    
    containerDiv.innerHTML = "";
    const gridSize = prompt("How many squares would you like?");
    createGrid(gridSize);
});



