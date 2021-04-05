//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const popup = document.querySelector('.pop');


//Load All eventListners
loadEventListeners();

//Load all event listners
function loadEventListeners() {
    //DOM LOad event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //remove all tasks
    clearBtn.addEventListener('click', clearAll);
    //filter events
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks from ls
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        task = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

  tasks.forEach(task => {
       //create list item
    const lis = document.createElement('li');
    const link = document.createElement('a');


    lis.className = "collection-item";
    link.className = "delete-item secondary-content";
    

    lis.appendChild(document.createTextNode(task));
    link.innerHTML = '<i class="fa fa-remove"></i>';

    taskList.appendChild(lis);
 
    lis.appendChild(link);

  });

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


    lis.className = "collection-item";
    link.className = "delete-item secondary-content";
    

    lis.appendChild(document.createTextNode(taskInput.value));
    link.innerHTML = '<i class="fa fa-remove"></i>';

    taskList.appendChild(lis);
 
    lis.appendChild(link);

    //Store in Local storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = "";

    e.preventDefault();
}

// Store Task
 function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        task = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
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
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}