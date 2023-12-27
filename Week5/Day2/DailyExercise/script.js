let form = document.getElementById('libform');
let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let person = document.getElementById('person');
let verb = document.getElementById('verb');
let place = document.getElementById('place');
let button = document.getElementById('lib-button');
let story = document.getElementById('story')



form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(noun.value)
    console.log(adjective.value)
    console.log(person.value)
    console.log(verb.value)
    console.log(place.value)

    let madLib = (`The ${adjective.value} ${noun.value} named ${person.value} ${verb.value} at ${place.value}`)
    console.log(madLib)
    
    let sentence = document.createElement('p')
    sentence.appendChild(document.createTextNode(madLib))

    story.appendChild(sentence)
})