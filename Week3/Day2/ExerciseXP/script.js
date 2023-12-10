//Exercise One//

var string = "A-quick-brown-fox"
var myNewString = string.split("-")
console.log(myNewString)

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"]
let newString = fruits.splice(1)
console.log(newString)

let newAlpha = newString.sort()
console.log(newAlpha)

let newWord = "kiwi"

newAlpha.push(newWord)

console.log(newAlpha)
let newAlphaB = newAlpha.sort()
console.log(newAlphaB)

console.log(newAlphaB);

newAlphaB.shift()
console.log(newAlphaB)

let newOrderList = newAlphaB.reverse()
console.log(newOrderList)

//Exercise 2:
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//Oranges//
console.log(moreFruits[1][1][0]);
//Apples//
console.log(moreFruits[1][0]);
//Blueberries//
console.log(moreFruits[1][2]);