document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container")

    const div = document.createElement("div")

    var grid = 16
    let i = 0; 
    while (i < grid){
        const div = document.createElement("div")
        container.appendChild(div)
        i++
    }

    
})