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

    if(mail.value === '') {
        alert('fill up mail');
    } 
   
    window.location = "Dash.html";

    area.innerHTML = name.value;
    area1.innerHTML = mail.value;

    

    name.value = '';
    mail.value = '';

    e.preventDefault();
}
