//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fliter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const popup = document.querySelector('.pop');


//Load All eventListners
loadEventListeners();

//Load all event listners
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //remove all tasks
    clearBtn.addEventListener('click', clearAll);
    //filter events
    fliter.addEventListener('keyup', filterTasks);
}

//Add Task
function addTask(e) {
    if(taskInput.value === ""){
      popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }

    //create list item
    const lis = document.createElement('li');
    const link = document.createElement('a');


    lis.className = "collection-items";
    link.className = "delete-item secondary-content";
    

    lis.appendChild(document.createTextNode(taskInput.value));
    link.innerHTML = '<i class="fa fa-remove"></i>';

    taskList.appendChild(lis);
 
    lis.appendChild(link);

    taskInput.value = "";


    e.preventDefault();
}

//remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

//clear all
function clearAll(e) {
    // taskList.remove();

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('collection-item').task => {
        const item
    }
}