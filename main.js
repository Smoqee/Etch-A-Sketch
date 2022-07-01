const container = document.querySelector('.container')
let totalWidth = container.offsetWidth-2
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']

function changeColor(e) {
    e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

button = document.querySelector('button')

button.addEventListener('click', () => {
    let length = prompt('grid length: ')
    createNewLayout(length) 
})


function createNewLayout(length) {

    if(length > 100 || length < 1) {
        alert('between 1 and 100')
        return
    }

    container.innerHTML = ""

    for(let i = 0; i<length*length; i++) {
        const square = document.createElement('div')
        square.style.width = `${totalWidth/length}px`
        square.style.height = `${totalWidth/length}px`
        square.classList.add('sqr')
    
        square.addEventListener('mouseover', changeColor)
        container.appendChild(square)    
    }
    
}


createNewLayout(16)
