// //Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift()
// console.log(people)
// people.splice(2, 1, "Jason")
// console.log(people)

// people.push("David")

// console.log(people.indexOf("Mary"))
// people.slice(1, 3)

// let findFoo = people.indexOf("Foo") // -1

// console.log(findFoo)

// let lastVariable = people.length - 1
// console.log(lastVariable)

// let lastValue = people[lastVariable]
// console.log(lastValue)

// for (let i=0; i<people.length; i++){
//     if(i===people.indexOf("Devon")){
//         break
//     }
// }
// console.log("Found Devon")

//
//Exercise 2: Your Favorite Colors

// let colors = ["orange","purple","turquoise","green","black"]
// let suffixes = ["st","nd","rd","th","th"]
// for (let i=0; i<colors.length; i++){
//     console.log(`My ${i+1}${suffixes[i]} favorite color is ${colors[i]}`)
// }


//Exercise 3: Repeat the Question
//Added Code Used Previously- But didn't work
// let changedToNumber = Number(askSomeQuestion)
// if(changedToNumber===typeof(Number)){
//     alert("Yessh")
// }

// //Corrected Code Below:
// let askSomeQuestion;

// while(true){
//     askSomeQuestion = Number(prompt("Give me a Number"))
//     console.log(typeof(askSomeQuestion))
//     if(askSomeQuestion >10){
//         break;
//     }
//     alert("Sorry, choose again")
// }
//     console.log("You chose above 10!")
    
//Exercise 4: Building Management
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// //2.
// console.log(building.numberOfFloors)

// let totalAptsFloorsOneAndThree =
// (building.numberOfAptByFloor.firstFloor)+(building.numberOfAptByFloor.thirdFloor)
// console.log(totalAptsFloorsOneAndThree)
// let nameOfSecondTenant = building.nameOfTenants[1]
// let secondTenantRooms = building.numberOfRoomsAndRent.dan[0]
// console.log(nameOfSecondTenant + " has", secondTenantRooms + " rooms")

// let sumOfDanAndSarahRent = building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
// let sumTotalOfDan = building.numberOfRoomsAndRent.dan[1]
// if(sumOfDanAndSarahRent>sumTotalOfDan){
//     sumTotalOfDan= 1200
// }
// console.log(sumTotalOfDan)


// //Exercise 5: Family
// let myFamily = {
//     spouse: ["Yonit"],
//     siblings: ["Amber", "Danny"],
//     pets: ["dog"],
//     streetAddress: ["10 Saar"],
//     city: ["Yad Binyamin"]
// }

// // //Below this Code didn't work
// // for (let i=0; i<myFamily; i++){
// //     console.log()
// // }
// // //This code didn't work either
// // for (let key in myFamily){
// //     console.log(key, key[i])
// // }
// for (let key in myFamily){
//     console.log(key, myFamily[key])
// }

//Exercise 6: Happy Chanukah
// const details = {
//     the: "song",
//     of: "Chanukah",
//     is: "beautiful"
// }
// for(let key in details){
//     console.log(key, details[key])
// }

//Exercise 7: Secret Group
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()
// let initials = '';

// for (let name of names){
//     initials += ((name[0]))
// }
// console.log(initials)
    