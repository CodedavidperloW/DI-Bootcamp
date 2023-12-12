//The idea is true or false

console.log(Boolean(1 > 2))

//Two equal signs compares only the "VALUE"
console.log(1 == "1")
console.log(1 === "1")
console.log(Boolean(1 != "1"))
console.log(Boolean(1 === 1 && 2 === 2))
//& Needs both to be true


console.log(Boolean(1 === 1 || 2 === 2))
//|| Needs only one to be true to return true.

let x = 1
x--
console.log(x)

//operators//

//Conditionals//
// let age = 18
// if (age > 18){
//     console.log("You are Big")
// }


//If...else
// let age = 17
// if (age > 18){
//     console.log("You are Big")
// } else {
//     alert("Good job! You are younger than 18")
// }

//Else If...
//If...else
// let age = 18
// if (age > 18){
//     console.log("You are Big")
// } else if (age <18){
//     console.log("You are younger")
// } else {
//     console.log("Mazal Tov")
// }

// let username = prompt("What is your username")

// if (username === "Bob"){
//     console.log("Welcome Bob")
// } else if (username === "Same"){
//     console.log("Welcome Sam")
// } else {
//     console.log("Welcome new user")
// }

// let question = prompt("What's your age?")
// if(question < 18){
//     alert("Sorry, you are too young to drive!")
// }else if (question == 18){
//     alert("Congrats on your first year of driving")
// }else{
//     alert("Powering On. Enjoy the ride!")
// }



//Switch Case
// let fruit = "Oranges"

// switch (fruit){
//     case "Oranges":
//         console.log("Oranges are $.59 per kilo");
//         break;
//     case "Mangos":
//     case "Papayas":
//         console.log("Mangos and Papyas are $2.00");
//         break;
//     default:
//         console.log("Sorry we are out of these fruits")
//     }

// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// //Array
// let colors =["red","orange","blue"]
// //Objects
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "Blue"
// };

// console.log(person.firstName, person.lastName)

// console.log(person["firstName"])

//Adding/Changing/Object Properties//Deleting Properties
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     children: {
//         eldest: "Sam",
//         middle: "Rivka"
//     },
//     favoriteFoods: ["candy","pizza","pasta"]
// };

// person.firstName = "Sarah"
// person.lastName =   "J"
// person.faveGame = "Basketball"
// delete person.faveGame
// console.log(person)
// console.log(person.children.eldest)
// person.favoriteFoods[2] = "cheese"


let dudes = {
    username: "thecooldog",
    password: "givemeabone"
}

let chillMan = {
    username: "kittyMan",
    password: "givememilk",
    timeline: "n/a"
}

let chillGirl = {
    username: "hamsterGirl",
    password: "inthecage",
    timeline: "n/a"
}

let chillBaby = {
    username: "givemebottle",
    password: "nownownow",
    timeline: "n/a"
}

let database = [dudes]
let newsfeed = [chillMan, chillGirl, chillBaby]
console.log(newsfeed[2].password) //nownownow


let newExample = [{uname: "David", lastname: "Perlow"}, {uname:"Jim", lastname:"Fine"}]
console.log(newExample[0].lastname)


//So now to access





// //switch
// var day = 7;
// switch (day)
// {
//     case 1:
// }
// //break
// //default