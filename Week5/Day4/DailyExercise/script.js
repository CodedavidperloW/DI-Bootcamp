let placeForLetters = document.getElementById('lettersInput')

placeForLetters.addEventListener('input', function(event){

const checkIt = event.target.value.replace(/[^a-zA-Z]/g, '')

event.target.value = checkIt

})


