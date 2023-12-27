function inform() {
    alert("You clicked it!")
}



//onclick()

//onload()

//onmouseover()

//onmouseout()

//onunload()

// function insertRow(){
// let newRow = document.createElement('tr');
// let cellOne = document.createElement('td');
// let cellTwo = document.createElement('td');
// newRow.appendChild(cellOne);
// newRow.appendChild(cellTwo);
// document.getElementById('sampleTable').appendChild(newRow)
// }

// function insertRow() {
//     let theRow = document.createElement('tr');
//     let theCellOne = document.createElement('td');
//     let theCellTwo = document.createElement('td');

//     theRow.appendChild(theCellOne)
//     theRow.appendChild(theCellTwo)
//     document.getElementById("sampleTable").appendChild(theRow)
// }








// let x = document.getElementById("btn")
// let y = document.getElementById("btn1")


// ///Now I am going to add events to each variable:

// x.addEventListener("click", respondClick)
// //Notice how the function doesn't have the paranthesis following
// x.addEventListener("mouseover", respondMouseOver)
// x.addEventListener("mouseout", respondMouseOut)

// function respondClick(){
//     document.getElementById('btn1').classList.add("jump")
//     alert("Button Clicked")
// }

// function respondMouseOver(){
//     document.getElementById('btn').classList.add("button-one")
// }

// function respondMouseOut(){
//     document.getElementById('btn').classList.add("button-one-erase")
// }


// y.addEventListener("click", respondClick)
// y.addEventListener("mouseover", respondMouseOver)



/**
 DOM
 **/

// let maindiv = document.getElementById('main')

// let theId = document.getElementById("root")

// let button = document.getElementsByTagName("button")[0]

// function handleClicking() {
//     button.classList.add("clicking")
// }

// button.addEventListener("click", handleClicking)


function makeItHappen(){
    document.getElementById("jsstyle").classList.add("click-it")

    document.getElementById("jsstyle").innerText="Hey there"
    
}

function revertIt(){
    document.getElementById("jsstyle").classList.remove("click-it")
    
        document.getElementById("jsstyle").innerText="Style"
}