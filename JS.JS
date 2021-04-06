const form = document.querySelector('.form')
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const btn = document.querySelector('#btn');
const area = document.querySelector('#here1');
const area1 = document.querySelector('#here2');



btn.addEventListener('click', addTo);

function addTo(e) {
    if(name.value === '') {
        alert('fill up form');
    } 

   let x = name.value;

    localStorage.setItem('name', x);
   
    // window.location = "Dash-.html";

    

    name.value = '';
    mail.value = '';

    e.preventDefault();
}
