const container = document.getElementById("container")
const setGridSizeButton = document.querySelector('.reset-button')

setGridSizeButton.addEventListener("click",function(){
    let gridSize = prompt("Enter the new grid size:")
    if(Number.isInteger(gridSize*1)){
        while(gridSize > 100 || gridSize <=0){
            gridSize = prompt("Please enter between 1 to 100.")
        }
        container.replaceChildren()
        generateNewBoard(gridSize)
    } else {
        alert("Invalid grid size! Please enter between 1 to 100")
    }
})

function generateNewBoard(grids){
    for(let i=0 ; i<grids ; i++){
        const row = document.createElement("div")
        row.classList.add('row')
        for(let squares = 0 ; squares < grids ; squares++){
            const square = document.createElement("div")
            square.classList.add('square')
            square.addEventListener("mouseover",(event)=>{
                event.target.style.background = generateRandomColor()
            })
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}

function generateRandomColor(){
    let colors = [];
    for (let i = 0; i < 3; i++) {
      colors.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + colors.join(', ') + ')';
}

generateNewBoard(16)