//Exercise 1: Information
//Part One

// function infoAboutMe() {
//     console.log("My name is David")
// }
// infoAboutMe()

// //Part Two

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}`)
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// //Exercise 2: Tips
// function calculateTip() {
//     let tip
//     let bill
//     bill = Number(prompt("How much was the bill?"))
//     //   console.log(typeof(bill))
//     // console.log(bill)
//     if (bill < 50) {
//         tip = bill * .20
//     } else if (bill > 50 && bill < 200) {
//         tip = bill * .15
//     } else {
//         tip = bill * .10
//     }
//     total = tip + bill
//     console.log(`The tip for the bill is ${tip} and the total is ${total}`)
// }

// //Previously lines 21 and 22 were on lines 18 and 19 and they didn't work because the variables were outside of the function. 
// calculateTip()

//Exercise 3: Find the Numbers Divisible by 23

// function isDivisible() {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {

//         if (i % 23 == 0) {
//             console.log(`${i} is divisible by the number 23`)
//             sum = sum + i

//         console.log(`The total of all the numbers which are divided by 23 is ${sum}`)
//     }
//     }
// }
// isDivisible()
//BONUS
// let divisor;
// function isDivisible(divisor) {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//         divisor = 25
//         if (i % divisor == 0) {
//             console.log(`${i} is divisible by the number ${divisor}`)
//             sum = sum + i;
//         }
//     }
//     console.log(`The total of all the numbers which are divided by the divisor ${divisor} is ${sum}`)
// }
// isDivisible(divisor)

//Exercise 4: Shopping List
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }

// //ANSWER BELOW:
// //
// //
// // 
// let total = 0

// function myBill() {
//     let shoppingList = ["banana", "orange", "apple"]
//     for (item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total = total + prices[item];
//             stock[item] = stock[item] - 1;
//             console.log(`Remaing stock is ${item} : ${stock[item]}`)
//         }
//     }

//     console.log(`The total bill is ${total}`)
// }
// myBill()

//Exercise 5: What's in my Wallet?


function changeEnough(itemPrice, amountOfChange) {
    
    let totalValueOfChangeCombined = 0
    
    amountOfChange[0] = amountOfChange[0] * .25
    amountOfChange[1] = amountOfChange[1] * .10
    amountOfChange[2] = amountOfChange[2] * .05
    amountOfChange[3] = amountOfChange[3] * .01
    
    for (let i = 0; i < amountOfChange.length; i++) {
        totalValueOfChangeCombined += amountOfChange[i]
        
    }
    
    if (totalValueOfChangeCombined > itemPrice) {
        console.log("You can buy it!")
        return true
    }
    else {
        console.log("Better not to buy it!")
        return false
    }
}
let result = changeEnough(4.25, [25, 20, 5, 0])
console.log(`If you want to know: ${result}`)






// let example = [.25, .10, .05, .01]
// let totalAmount = 0;
// for (let i=0; i<example.length; i++){
//     totalAmount+=example[i]
// }
// console.log(totalAmount)

