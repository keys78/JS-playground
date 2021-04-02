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


//LOCAL STORAGE
localStorage.setItem('name', 'John');