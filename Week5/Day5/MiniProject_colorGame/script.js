let gridContainer = document.getElementById('colorGame-container')
let gridSize = 50;
let cells = [];
let chosenColor = ''
let cell;

for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
    cells.push(cell)
}

let colorRed = document.getElementsByClassName('color-red')[0]
let colorOrange = document.getElementsByClassName('color-orange')[0]
let colorYellow = document.getElementsByClassName('color-yellow')[0]
let colorGreen = document.getElementsByClassName('color-green')[0]
let colorBlue = document.getElementsByClassName('color-blue')[0]
let colorPurple = document.getElementsByClassName('color-purple')[0]
let colorPink = document.getElementsByClassName('color-pink')[0]
let colorBlack = document.getElementsByClassName('color-black')[0]
let colorGrey = document.getElementsByClassName('color-grey')[0]

colorRed.addEventListener('click', function () {
    chosenColor = 'color-red';
    console.log('selected color:' + chosenColor)
});


colorOrange.addEventListener('click', function () {
    chosenColor = 'color-orange';
    console.log('selected color:' + chosenColor)
})
colorYellow.addEventListener('click', function () {
    chosenColor = 'color-yellow';
    console.log('selected color:' + chosenColor)
})
colorGreen.addEventListener('click', function () {
    chosenColor = 'color-green';
    console.log('selected color:' + chosenColor)
})
colorBlue.addEventListener('click', function () {
    chosenColor = 'color-blue';
    console.log('selected color:' + chosenColor)
})
colorPurple.addEventListener('click', function () {
    chosenColor = 'color-purple';
    console.log('selected color:' + chosenColor)
})
colorPink.addEventListener('click', function () {
    chosenColor = 'color-pink';
    console.log('selected color:' + chosenColor)
})

colorBlack.addEventListener('click', function () {
    chosenColor = 'color-black';
    console.log('selected color:' + chosenColor)
})

gridContainer.addEventListener('mouseover', function (event) {
    console.log(chosenColor)
    if (event.target.classList.contains('cell') && chosenColor!=='') {
        event.target.classList.add(chosenColor)
    }
})


function clearIt() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('color-red','color-orange','color-yellow','color-green','color-blue','color-purple','color-pink','color-black','color-grey') 
    }
}

gridContainer.addEventListener('mousedown', function(event){
    if(event.target.classList.contains('cell') && chosenColor!=='')
    event.target.style.backgroundColor= chosenColor
})

gridContainer.addEventListener('mousedown', function () {
    chosenColor = ''
})