// let val = document.getElementById('main');
// let lis = document.getElementById('task-title');
// let list; 


// document.querySelector('ul li:first-child').style.background = "gold";
// document.querySelector('ul li:nth-child(2)').style.background = "red";
// document.querySelector('ul li:nth-child(3)').style.background = "yellow";
// document.querySelector('ul li:nth-child(4)').style.background = "purple";
// document.querySelector('ul li:nth-child(5)').style.background = "green";
// document.querySelector('ul li:nth-child(5)').innerHTML = "wghrusnf";

 
// let val = document.getElementsByClassName('card-title');

// let list = document.querySelector('.collection').getElementsByClassName('collection-item');
// let tag = document.getElementsByTagName('li');

// let taag = Array.from(tag)

// taag.forEach(tag => {
//     console.log(tag)
//     tag.textContent = "red";
// });

// for(i = 0; i < tag.length; i++){
//     console.log(taag);
//     tag[i].style.background = "green";
//     tag[i].textContent = "green";
// }


// let alle = document.querySelectorAll('li');


// for(i = 0; i < alle.length; i++){
//  alle[i].style.background = "red"
// }

//  alle.forEach(alle => {
//    console.log(alle);
//   alle.style.background = "yellowgreen";
// });

// let lisOdd = document.querySelectorAll('collection-items:nth-child(odd)');
// let liEven = document.querySelectorAll('li:nth-child(even)');

// console.log(lisOdd);

// lisOdd.forEach(lisOdd =>{
//     lisOdd.style.background = 'red'
// });

// liEven.forEach(liEven =>{
//     liEven.style.background = 'green'
// });

// CREATING A NEW ELEMENT

//  const li = document.createElement('li');
//  const link = document.createElement('a');
//  const ul = document.querySelectorAll('ul');

//  li.className = "collection-item";
//  link.className = "delete-item secondary-content";

//  li.innerHTML = "Hannah is an unclutured vulture";
//  link.innerHTML = ` <i class="fa fa-remove"></i>`;

//  document.querySelector("ul.collection").appendChild(li)
//  li.appendChild(link);

//  console.log(li);
//  console.log(link);

// CREATING AND REPLACING ELEMENT 

let newHeading = document.createElement('h2');

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task List"));

let old = document.getElementById('task-title');

let carda = document.querySelector('.card-action');

carda.replaceChild(newHeading, old);

console.log(newHeading);
console.log(old);


const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

//remove childelement
list.removeChild(lis[3]);

//Classes and attr
const firstLi = document