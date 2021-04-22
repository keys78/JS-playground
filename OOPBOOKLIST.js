//Booh Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author,
    this.isbn = isbn;
}
//UI constructor
function UI() {}

//Add Book To List
UI.prototype.addBookToList = function(book) {

    const list = document.getElementById('book-list')
    //create tr element
    const row = document.createElement('tr')
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `

    list.appendChild(row);
}

//show Alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
//insert Alert
    container.insertBefore(div, form);

    //timeout after 3sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}


//Delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}



document.getElementById('book-form').addEventListener('submit', function (e) {
    //get form values
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value


    //nstantiate book
        const book = new Book(title, author, isbn);

    //Instantaite UI
    const ui = new UI();


    //validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
    ui.showAlert('Please fill in all field', 'error')
    }else {
    //Add book to list
    ui.addBookToList(book);
    
    //show success
    ui.showAlert('Book Added', 'success');

    //clear 
    document.getElementById('book-form').reset();
    }

 e.preventDefault();
})

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui = new UI();

    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('Book removed!', 'success');

    e.preventDefault();
});
