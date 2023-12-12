// NOTES:
// let age = 20
// if (age > 18) {
//     console.log("You're a big man")
// }


//Exercise One
let x = 5;
let y = 2;

//We want to display that "x is the biggest number"

if (x > y) {
    console.log("x is the biggest number")
}


//Exercise Two
let newDog = "Chihuahua"

let lengthNewDog = newDog.length
newDog = newDog.toUpperCase()


if (newDog = "Chihuahua") {
    console.log('I love Chihuahuas, its my favorite dog')
} else {
    console.log("Sorry. Try Again")
}


//Exercise Three: Even or Odd
let promptA = Number(prompt("give me a number"))
if (promptA % 2 == 0) {
    alert("Great Job it is even")
} else {
    alert("This is an odd number")
}

//Exercise Four: Group Chat 
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log("No one is online!")
} else if (users.length === 1) {
    console.log(`${users.user} is online`)
}
else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`)
    //Here I needed to remember not to write users.user because
    //it isn't an object
    //just use the variable and the index number
} else if (users.length > 2) {
    console.log(`${users[0]} and ${users[1]} are online, as well as 
    ${users.length - 2} more.`)
}
