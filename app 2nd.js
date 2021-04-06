// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello');

//     e.preventDefault()
// })

//EVENT OBJECTS

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
    
//     let val;
    
//     val = e;

//     //Event target element
//     val = e.target;

//     console.log(val);
// }


// MOUSE EVENTS

// const clearBtn  = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// card.addEventListener('mousemove', runEvent);

// //Event Handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 250)`

// }


// //LOCAL STORAGE
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// //set sesion storage item
// sessionStorage.setItem('name', 'Kim');

// //remove from local storage
// localStorage.removeItem('name')



// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();

// console.log(name,age)
// document.querySelector('form').addEventListener('submit',
//  function(e){
//     const task = document.getElementById('task').value;

//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks',JSON.stringify(tasks));

//     alert('task saved')

//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(task =>{
//     console.log(task);
// })


// const x = document.getElementById('main');

// x.innerHTML = "red";