// ///EXERCISE 1:

// //1a
// let getHOne = document.getElementsByTagName("h1")[0]

// //2a
// let theArticle = document.getElementsByTagName("article")[0]
// theArticle.removeChild(theArticle.lastElementChild)
// console.log(theArticle)

// //3a
// let theHTwo = document.getElementsByTagName('h2')[0]
// console.log(theHTwo)
// theHTwo.onclick = function changeBackground(){
//     theHTwo.style.background ='red'
// }


// //4a
// let theHThree = document.getElementsByTagName('h3')[0]
// console.log(theHThree)
//     theHThree.onclick = function disappear(){
//         theHThree.style.display='none'
//     }

// //5a
// let theButton = document.getElementsByTagName('button')[0]
// let theArticleBold = document.getElementsByTagName('article')[0]
// console.log(theButton)
// theButton.onclick = function makeItBold(){
//     theArticleBold.style.fontWeight='bold'
// }

// //EXERCISE 2
// //1
// let ourForm = document.getElementsByTagName('form')
// //2
// let idOne = document.getElementById('fname')
// let idTwo = document.getElementById('lname')
// let idThreeSubmit = document.getElementById('submit')
// let ourInputs = [idOne, idTwo]
// //3
// let nameOne = document.getElementsByName('firstname')
// let nameTwo = document.getElementsByName('lastname')
// let ourNameInputs = [nameOne, nameTwo]
// console.log(ourNameInputs)


// let newForm = document.querySelector('ul')

// idThreeSubmit.onclick = function addNewNames(event) {
//     //////////Tried this first
//     ////////// firstLi.appendChild(idOne)
//     ////////// secondLi.appendChild(idTwo)
//     ////////// newForm.appendChild(firstLi.innerText)
//     ////////// newForm.appendChild(secondLi.innerText)
//     event.preventDefault()
//     let firstLi = document.createElement('li')
//     let secondLi = document.createElement('li')

//     let inputValueOne = idOne.value
//     let inputValueTwo = idTwo.value
//     let textNodeOne = document.createTextNode(inputValueOne);
//     let textNodeTwo = document.createTextNode(inputValueTwo);
//     firstLi.appendChild(textNodeOne)
//     secondLi.appendChild(textNodeTwo)
//     newForm.appendChild(firstLi)
//     newForm.appendChild(secondLi)
//     idOne.value=''
//     idTwo.value=''
//     console.log(newForm)
// };


//EXERCISE THREE:

// let allBoldItems;

// function getBoldItems() {
//     allBoldItems = document.getElementsByTagName('strong')

//     console.log(allBoldItems)

//     for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].addEventListener("mouseover", highlight)
//         allBoldItems[i].addEventListener("mouseout", backToBlack)
//         console.log(allBoldItems[i].textContent)
//     }
// }

// getBoldItems()

// function highlight(event) {
//    //First I tried it like this:
//     // for (let i = 0; i < elements.length; i++) {
//     //     elements.style.color = 'blue'
//     //     elements.style.fontSize = '2rem'
//     // }
//     let element = event.target
//         element.style.color = 'blue'
//         element.style.fontSize = '2rem'
// }

// function backToBlack(event) {
//     // First I tried it like this:
//     // for (let i = 0; i < theThing.length; i++) {
//     //     theThing.style.color = ''
//     //     theThing.style.fontSize = ''
//     // }
//     let elementTwo = event.target
//     elementTwo.style.color=''
//     elementTwo.style.fontSize =''
// }

// EXERCISE FOUR
// let theForm = document.getElementById('MyForm')
// let theRadius = document.getElementById('radius')
// let theVolume = document.getElementById('volume')
// let theSubmit = document.getElementById('submit')
// let solutionNewLi = document.createElement('p')

// theSubmit.onclick = function (event) {
//     theRadius = theRadius.value
//     event.preventDefault()
//     solutionNewLi.textContent = (4 / 3) * Math.PI * Math.pow(theRadius, 3)
//     console.log(solutionNewLi);
//     theForm.appendChild(solutionNewLi)
// }




