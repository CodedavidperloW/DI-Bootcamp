//Exercise 1//

let myFaveFood = "Flafel"

let myFaveMeal = "Shabbat Evening"

console.log(`I eat ${myFaveFood} at ${myFaveMeal}`)

//Exercise 2//
//Part 1//
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// let lengthOfArray = myWatchedSeries.length()  
// When using the length don't use parenthesis

let lengthOfArray = myWatchedSeries.length
console.log(lengthOfArray)

let myWatchedSeriesSentence = myWatchedSeries.toString()
console.log(myWatchedSeriesSentence)

let comboSentence = `I watched ${lengthOfArray} series: ${myWatchedSeriesSentence}`
console.log(comboSentence)

//Part 2//
console.log(myWatchedSeries[2])
let myWatchedSeriesB = myWatchedSeries.splice(2, 1, "friends");
console.log(myWatchedSeriesB)
myWatchedSeries.push("Ben Shapiro")
myWatchedSeries.splice(0, 0, "Arutz Meir")
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1][2])
console.log(myWatchedSeries);

//Exercise 3: The Temperature Converter

let celTemp = 10

let farenheit = (celTemp / 5) * 9 + 32
console.log(`${celTemp} in Celcius is ${farenheit} in Farenheit`)

//Exercise 4: Guess the Answer #1//
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
// Prediction: 55
// Actual:55

a = 2;

console.log(a + b) //second expression
// Prediction:23
// Actual:23
//the variable c does not have a value
console.log(3 + 4 + '5');
//Predition: 7'5'
//Actual: 75

let problem = (3 + 4 + '5')
console.log(typeof problem)


//Exercise 5
typeof(15)
// Prediction: Number
// Actual: Number

typeof(5.5)
// Prediction: Number
// Actual:Number

typeof(NaN)
// Prediction: NaN
// Actual: number

typeof("hello")
// Prediction: String
// Actual: String

typeof(true)
// Prediction: Boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
// Prediction:hamburger
// Actual: NaN --- It isn't mathematical, only possilbe to add with strings

"1" + "3"
// Prediction:"13"
// Actual:"13"

"1" - "3"
// Prediction:"NaN"
// Actual:-2

"johnny" + 5
// Prediction: johnny5
// Actual:

"johnny" - 5
// Prediction: NaN
// Actual:

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: false
// Actual: true

1 === "1"
// Prediction: false
// Actual:false





//Exercise 6: Guess The Answer #3

5 + "34"
// Prediction: 39
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 2
// Actual: nan

5 % 10
// Prediction: nan
// Actual:nan

"Java" + "Script"
// Prediction: "JavaScript"
// Actual: 

" " + " "
// Prediction:"  "
// Actual:""+""

" " + 0
// Prediction:Nan
// Actual:" 0"

true + true
// Prediction:Nan
// Actual: 2 

true + false
// Prediction: 1
// Actual:

false + true
// Prediction:1
// Actual:

false - true
// Prediction:-1
// Actual:

!true
// Prediction:false
// Actual:

3 - 4
// Prediction:-1
// Actual:

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN