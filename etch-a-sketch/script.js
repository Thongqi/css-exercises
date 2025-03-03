document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    const div = document.createElement("div")


    var gridsize = 16

    changeGridContent()
    createGrid(gridsize, container)
    var usersize = document.querySelector('#grid-size')
    usersize.addEventListener('input', () => {
        gridsize = (usersize.value < 101 && usersize.value > 1)?usersize.value:gridsize
        
        container.innerHTML = ''
        createGrid(gridsize, container)
    })
    var gridslists = document.querySelectorAll('.container>div>div')
    
    //reset
    

    
})

function changeGridContent(){
    var choices = document.querySelectorAll("input[name = 'content']")

    choices.forEach((choice) => {
        if(choice.checked) {
            var content = choice.getAttribute('data-content')
            console.log(content)
            if (content != 'rainbow'){
                document.querySelector(':root').style.setProperty('--content', content)
                document.querySelectorAll('.hovered').style.setProperty('background-color', '')
            }
         
        }
    })
}


function createGrid(gridsize, container){
    // var totalgrid = gridsize * gridsize
    let i = 0;
    // while (i < totalgrid){
    //     const div = document.createElement('div')
    //     container.appendChild(div)
    //     i++
    // }
    while (i < gridsize){
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        let j = 0;
        while(j < gridsize){
            const div = document.createElement('div')
            row.appendChild(div)
            j++
        }
        i++
    }

    var gridslists = document.querySelectorAll('.container>div>div')
    gridslists.forEach((item) => {
        item.addEventListener('mouseover', (item) => {
            if (document.querySelector('#rainbow').checked){
                console.log(item.target)
                rainbowColor(item.target)
            }
            
            changeGridColor(item.target)

        })
    })

    reset(gridslists)

}

function changeGridColor(hovereditem){
    // add class to hovered grid
    hovereditem.classList.add('hovered')
}

function reset(gridslists){
    var resetbutton = document.querySelector('#reset')
    console.log(resetbutton)
    resetbutton.addEventListener('click', () => {
        gridslists.forEach((grid) => {
            grid.classList.remove('hovered')
            grid.style.backgroundColor = ''
        })
    })

}

function rainbowColor(item){
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    item.style.backgroundColor = '#' + randomColor
}
