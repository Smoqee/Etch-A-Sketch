const field = document.querySelector('#field')


function createField(amount) {
    field.innerHTML = ""
    for (let index = 0; index < amount*amount; index++) {
        const cell = document.createElement('div')
        cell.classList.add('item')
        field.appendChild(cell)
        cell.addEventListener('mouseover', changeColor)
    }
    field.style.cssText = `grid-template: repeat(${amount}, ${100/amount}%) / repeat(${amount}, ${100/amount}%);`
    
}

createField(16)

const button = document.querySelector('button')

button.addEventListener('click', () => {
    let length = prompt('grid length: ')
    length > 0 && length < 101 ?  createField(length): alert("größer 0 und kleiner gleich 100!")
   

})

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']

function changeColor(e) {
    e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
