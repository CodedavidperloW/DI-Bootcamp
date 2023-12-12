//Exercise 1
let sentence = ["my","favorite","color","is","blue"];
let comboSentence = sentence.join(" ")
console.log(comboSentence)
let newExample = sentence.join("*")
console.log(newExample)

//Exercise 2
let str1 = "mix";  //        po   x
let str2 = "pod";   //       mi   d

let newArrayOne = str1.split('')
console.log(newArrayOne)
let newRemainingArray = newArrayOne.slice(0,2)  //"mi"


//Now I can create a new array from second string "pod". 
//Once it is in an array, I can slice the last letter to a new Array.
//Then I will push it to 'newRemainingArray'
let newArrayTwo = str2.split('').slice(2)
let stringForArrayTwo = newArrayTwo.join('')
console.log(stringForArrayTwo)
newRemainingArray.push(stringForArrayTwo)
let mid = newRemainingArray.join('')

console.log(mid)




let bNewArrayOne = str2.split('')
console.log(bNewArrayOne)
let bNewRemainingArray = bNewArrayOne.slice(0,2)
///bNewRemainingArray = [p,o]
let bNewArrayTwo = str1.slice(2)
console.log(bNewArrayTwo)      //"x"
bNewRemainingArray.push(bNewArrayTwo)
let pox = bNewRemainingArray.join('')

console.log(pox)














// newArrayTwo.join('')
// newRemainingArray.push(newArrayTwo)
// console.log(newRemainingArray)













// console.log(aStr1)
// let bStr2 = str2.slice(0,2)   //"po"
// console.log(bStr2)









// let stringA = str1a.join(',')   
// let stringAa = stringA.split(',') // [m,i,x]
// console.log(stringAa)

// let replacementForA = bStr2.split('') // ['p','o']

// let finalA = stringAa.splice(0,2, replacementForA)


// let str2b = str2.split('')   // [pod]
// let stringB = str2b.join(',')   // [p,o,d]






