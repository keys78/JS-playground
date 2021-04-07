const form = document.querySelector('.form')
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const btn = document.querySelector('#btn');
const area = document.querySelector('#here1');
const area1 = document.querySelector('#here2');



btn.addEventListener('click', addTo);

function addTo(e) {

   let x = name.value;
   let y = email.value;

    localStorage.setItem('name', x);
    localStorage.setItem('mail', y);
   
     window.location = "Dash.html";



    e.preventDefault();
}
