let sentence = "The movie is not that bad, I like it."

let wordNot = sentence.indexOf("not")
console.log(wordNot)

let wordBad = sentence.indexOf("bad")
console.log(wordBad)

if (wordBad > wordNot) {
    let good = "good";
    let theBeginning = sentence.slice(0, wordNot);
    let theRest = sentence.slice(wordBad + 3,);
    let newFinalSentence = theBeginning + good + theRest;
    console.log(newFinalSentence)
} else {
    console.log(sentence)
}