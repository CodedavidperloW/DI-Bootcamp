//Words Surrounded by Stars//

//1. Prompt for several words seperated by commas
//2. Create into an array using (",") as a seperator
//3. Create a loop that console.logs each element (word) from the array.
//4. That will be success for me, however, now we need to add stars. 
//


let thePrompt = prompt("Please add a few words seperated by commas")

let thePromptArray = thePrompt.split(",")
console.log(thePromptArray)



let maxWordLength = 0
for (let i = 0; i < thePromptArray.length; i++) {
    if (maxWordLength < thePromptArray[i].length) {
        maxWordLength = thePromptArray[i].length
    }
    console.log(maxWordLength)
}

let topRow = ("*".repeat(maxWordLength + 7))
function middleStars() {
    for (let i = 0; i < thePromptArray.length; i++) {
        console.log("* ", thePromptArray[i], " ".repeat(maxWordLength-thePromptArray[i].length), "*")
    }
}
let  bottomRow = ("*".repeat(maxWordLength + 7))

console.log(topRow)
middleStars()
console.log(bottomRow)
