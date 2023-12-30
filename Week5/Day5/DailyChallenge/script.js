let currentTask = document.querySelector('.addTask')
const tasks = []
let listOfTasks = document.querySelector('.listTasks')

function addTask() {
    let newSubmission = currentTask.value
    if (newSubmission === '') {
        alert('Please Add a Task')
    } else {
        tasks.push(newSubmission);
        theDisplay()
        console.log(tasks);
        currentTask.value = ''
    }
}



function theDisplay(){
    listOfTasks.innerHTML = '';
    tasks.forEach(task => {
        let createTaskDiv = document.createElement('div')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        let label = document.createElement('label')
        label.textContent = task
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';

       deleteButton.addEventListener('click', function(){
            label.classList.add('strike-it')
       })
    

        createTaskDiv.appendChild(deleteButton)
        createTaskDiv.appendChild(checkbox)
        createTaskDiv.appendChild(label)
        listOfTasks.appendChild(createTaskDiv)
    });
}

function clearItAll(){
    listOfTasks.innerHTML ='';
    tasks.length = 0;
}