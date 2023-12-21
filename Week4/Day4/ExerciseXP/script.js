//DOM MANIPULATION
//DOM TREE
//ATTRIBUTES


//Exercise One: Users
// var usingDOM = document.getElementById("container")
// console.log(usingDOM)

// let firstPartOfList = document.getElementsByClassName("list")[0]

// firstPartOfList.children[1].textContent = "Richard"

// console.log(firstPartOfList)

// let secondPartOfList = document.getElementsByClassName("list")[1]
// let elementToRemove = secondPartOfList.children[1]
// secondPartOfList.removeChild(elementToRemove)
// console.log(secondPartOfList)


// let theLists = document.getElementsByClassName("list")

// for (let i = 0; i < theLists.length; i++) {

//     let theTags = theLists[i].getElementsByTagName("li")

//     for (let j = 0; j < theTags.length; j++) {
//         theTags[0].innerText = "David Perlow"
//     }

// }

// console.log(theLists)



//Exercise 2: Users and Style

// let firstDiv = document.getElementsByTagName("div")[0];
// firstDiv.classList.add("background-color")
// console.log(firstDiv);
// let listOfLiItems = document.getElementsByTagName("li")
// let firstLiElement = listOfLiItems[0]
// // console.log(firstLiElement)
// firstLiElement.parentNode.removeChild(firstLiElement)
// console.log(listOfLiItems[0])


//Exercise 3: Change the Navbar

//1
let newId = document.getElementById("navBar")
let newId2 = newId.setAttribute("id", "SocialNetworkNavigation")
console.log(newId)
//2
let newCreatedElement = document.createElement("li")
newCreatedElement.innerText="Logout"
console.log(newCreatedElement)
//3
//First Attempt: Not Successful
// let listedItems = document.getElementsByTagName("ul")
// listedItems.appendChild(newCreatedElement)
// console.log(listedItems)
let addTheLi = document.querySelector("#SocialNetworkNavigation ul")
//Challenging, since I forgot that I changed the id :)
addTheLi.appendChild(newCreatedElement)
console.log(addTheLi)



