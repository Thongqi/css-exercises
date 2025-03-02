document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    const div = document.createElement("div")


    var gridsize = getUserSize()? getUserSize:16
    
    createGrid(gridsize)

    //change color on hover
    var gridslists = document.querySelectorAll('.container div')
    gridslists.forEach((item) => {
        item.addEventListener('mouseover', () => {
            changeGridColor(item)
        })
    })

    //reset
    var resetbutton = document.querySelector('#reset')
    resetbutton.addEventListener('click', reset(gridslists))

    
})

function getUserSize(){
    var usersize = document.querySelector('#grid-size')
    usersize.addEventListener('change', (event) => {
        return this.value
    })
}

function createGrid(gridsize){
    let i = 0
    let j = 0
    while (i < gridsize){
        while(j < gridsize){
            const div = document.createElement('div')
            container.appendChild(div)
            j++
        }
        i++
    }
}

function changeGridColor(hovereditem){
    // add class to hovered grid
    hovereditem.classList.add('hovered')
}

function reset(gridslists){
    gridslists.forEach((grid) => {
        grid.classList.remove('hovered')
    })
}