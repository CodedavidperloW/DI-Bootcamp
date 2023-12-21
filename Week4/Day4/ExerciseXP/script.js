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
// let newId = document.getElementById("navBar")
// let newId2 = newId.setAttribute("id", "SocialNetworkNavigation")
// console.log(newId)

//2
// let newCreatedElement = document.createElement("li")
// newCreatedElement.innerText="Logout"
// console.log(newCreatedElement)

//3
////////Lines 61-65 didn't work
////////First Attempt: Not Successful
//////// let listedItems = document.getElementsByTagName("ul")
//////// listedItems.appendChild(newCreatedElement)
//////// console.log(listedItems)

////corrected continuation below
// let addTheLi = document.querySelector("#SocialNetworkNavigation ul")
// //Challenging, since I forgot that I changed the id :)
// addTheLi.appendChild(newCreatedElement)
// console.log(addTheLi)

//4
// let firstUlValue = addTheLi.firstElementChild.textContent
// console.log(firstUlValue)
// let lastUlValue = addTheLi.lastElementChild.textContent
// console.log(lastUlValue)

//Exercise 4: My Book List



let newDiv = document.createElement("div")
newDiv.classList.add("listBooks")

console.log(newDiv)

let allBooks = [
    { title: "Not A Lone Solider", author: "David Perlow", image: "Pics/NaaSoldier.jpg", alreadyRead: true },
    { title: "Bunnicula", author: "Deborah Howe", image: "Pics/Bunnicula.jpg", alreadyRead: true },
    { title: "Red Badge of Courage", author: "Stephen Crane", image: "Pics/RB_Courage.jpg", alreadyRead: true },
    { title: "Colin Powel", author: "Colin Powell", image: "Pics/Colin_Powell.webp", alreadyRead: true },
    { title: "example-boy", author: "Boy", image: "Pics/exampleBoy.jpg", alreadyRead: false },
    { title: "example-baby", author: "Baby", image: "Pics/exampleBaby.jpg", alreadyRead: false },
];

allBooks.forEach(book => {
    //Now display the information..
    //How? Console.log? How can I display it in HTML??
    //!!Create Different Elements !!

    let newBookInformation = document.createElement("p")
    newBookInformation.textContent = `The title:${book.title}, written by:${book.author}, Already read: ${book.alreadyRead ? 'true' : 'false'}`;
    newDiv.appendChild(newBookInformation)
})


//Now I need to make a table, so that the above information can be placed there

let table = document.createElement("table")
let headerRow = table.createTHead().insertRow(0);
let titleHeader = headerRow.insertCell(0);
let authorHeader = headerRow.insertCell(1);
let imageHeader = headerRow.insertCell(2);
titleHeader.textContent = "Title";
authorHeader.textContent = "Author";
imageHeader.textContent = "Image";

allBooks.forEach(book => {
    let row = table.insertRow();
    let titleCell = row.insertCell(0);
    titleCell.textContent = book.title;
    let authorCell = row.insertCell(1);
    authorCell.textContent = book.author;
    let imageCell = row.insertCell(2);
    let image = document.createElement("img");
    image.src = book.image;
    image.width = 100;
    imageCell.appendChild(image);

    if (book.alreadyRead) {
        titleCell.style.color = "red";
        authorCell.style.color = "red";
        image.style.border = "2px solid red";

    }
})

newDiv.appendChild(table)
document.body.appendChild(newDiv);