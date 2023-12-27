//Exercise One: Timer
//Part One
// function learnSetTimeout(){
//     alert ("Hello There")
// }

// setTimeout(learnSetTimeout, 7000)

//Part Two
// let theContainer = document.getElementById('container')
// let stopTheInterval = document.getElementById('clear')
// let paragraphCount = 0

// let startTheInterval = setInterval(createNewParagraph, 2000)

// function createNewParagraph() {

//     if (paragraphCount < 5) {
//         let firstPart = "Hello World"
//         let newSentence = document.createElement('p')
//         let createNode = document.createTextNode(firstPart)
//         newSentence.appendChild(createNode)
//         theContainer.appendChild(createNode)

//         paragraphCount++
//     }
// }


// stopTheInterval.addEventListener('click', function () {
//     clearInterval(startTheInterval)
// })


//Exercise Two: Move the Box
// let box = document.getElementById('animate')
// let myButton = document.getElementById('myButton')
// let intervalID;
// myButton.onclick = function () {

//     console.log('hello')
//     box.style.backgroundColor = 'blue'
//     box.classList.add('move-it')
//     let animationLength = 2000;
//     intervalID = setInterval(resetTheAnimation, animationLength)
// }

// function resetTheAnimation() {
//     box.style.backgroundColor = 'red';
//     box.style.left = '0';
//     box.classList.remove('move-it')
//     clearInterval(intervalID)
// }

//Exercise Three: Drag & Drop
let isItDragging = false
let draggableBox = document.getElementById('box')
let offsetX
let offsetY;
draggableBox.addEventListener('mousedown', (e) => {
    isItDragging = true;
    offsetX = e.clientX - draggableBox.getBoundingClientRect().left;
    offsetY = e.clientY - draggableBox.getBoundingClientRect().top;
    draggableBox.style.cursor = 'grabbing';
    console.log('Mouse coordinates:', e.offsetX, e.offsetY)
})

document.addEventListener('mousemove', (e) => {

    if (isItDragging) {

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        draggableBox.style.left = `${x}px`
        draggableBox.style.top = `${y}px`

    }
});

document.addEventListener('mouseup', ()=>{
    if(isItDragging){
        isItDragging = false;
        
        draggableBox.style.cursor = 'grab'
    }
})