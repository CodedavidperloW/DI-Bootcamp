

let moveAbleBox = document.getElementById('draggable-element')

function onDragStart(event){
console.log("start")
event.dataTransfer.setData("text/plain", event.target.id)
}

function onDragEnd(event){
    console.log("end")
}

function onDrag(event){
    event.target.textContent = event.clientX + "" +event.clientY;
}

function onDragOverOrangeSqure(event){
    console.log("get out!")
    event.preventDefault()
}

function dropItAndLeave(event){
    console.log("Horray!")
    const id = event.dataTransfer.getData("text/plain")
    const pinkSquare = document.getElementById(id)
    let orangeSquare = document.getElementById("drop-element")
    orangeSquare.appendChild(pinkSquare)
    pinkSquare.style.backgroundColor ='blue'
}



function dragOverPink(event){
event.preventDefault()
}

function nowDropIt(event){
    console.log('Good Job!')
    const id = event.dataTransfer.getData("text/plain")
    const pinkSquare = document.getElementById(id)
    let dottedBox = document.querySelector('.draggable-container')
    dottedBox.appendChild(pinkSquare)
    pinkSquare.style.backgroundColor = 'lightcoral'
}