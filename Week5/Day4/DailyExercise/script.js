let placeForLetters = document.getElementById('lettersInput')

placeForLetters.addEventListener('input', function(event){

const checkIt = event.target.value.replace(/[^a-zA-Z]/g, '')

event.target.value = checkIt

})


// document.addEventListener('DOMContentLoaded', function () {
//     let placeForLetters = document.getElementById('lettersInput');

//     placeForLetters.addEventListener('input', function (event) {
//         // Use a regular expression to filter out non-letter characters
//         const sanitizedValue = event.target.value.replace(/[^a-zA-Z]/g, '');

//         // Update the input field with the sanitized value
//         event.target.value = sanitizedValue;
//     });
// });