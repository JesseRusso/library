let myLibrary = [];
let currentPage = 1;
let booksPerPage = 10;

let cardsGrid = document.getElementById("grid");
const dia = document.getElementById("addBookModal");
const overlay = document.getElementById('backdrop');
const addBookButton = document.getElementById("addBook");
const confirmButton = document.getElementById("confirmButton");
const dialogTitle = document.getElementById('dialogTitle');
const dialogAuthor = document.getElementById('dialogAuthor');
const formPages = document.getElementById('formPages');

document.addEventListener("submit", (e) => {
    e.preventDefault();
    submitModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
addBookButton.addEventListener("click", () => {
    openModal();
});
backdrop.addEventListener('click', (e) => {
    if (e.target != dia){
        closeModal();
    }
})

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

const theStranger = new Book("The Stranger", "Albert Camus", 121);
const wind = new Book("The Name of The Wind", "Patrick Rothfuss", 454);
myLibrary.push(theStranger);
myLibrary.push(wind);

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBooks();
}
addBookToLibrary("Meow?", "Lando", 1);
addBookToLibrary("The Red Queen Theory", "Matt Ridley", 365);
addBookToLibrary("A Tale of Two Cities", "Ray Bradbury", 300);
addBookToLibrary("The Life of Pie", "Yann Martel", 250);

displayBooks();

function displayBooks () {
    //clears the current grid
    while (cardsGrid.firstChild) {
        cardsGrid.removeChild(cardsGrid.firstChild);
    }
    //builds a new grid with myLibrary contents
    myLibrary.forEach((e) => {
        newCard(e);
    });
}

function newCard (book){
    const card = document.createElement("div");
    card.classList.add("card");
    //add title div to card
    const title = document.createElement("div");
    title.innerText = book.title;
    title.classList.add("book-title");
    title.classList.add('book-info');
    card.appendChild(title);

    const author = document.createElement("div");
    author.innerText = book.author;
    author.classList.add("book-author");
    author.classList.add('book-info');
    card.append(author);

    //add page count to card
    const pages = document.createElement('p');
    pages.classList.add('pages');

    if (parseInt(book.pages) <= 1) {
        pages.textContent = `${book.pages} page`;
    }
    else{
        pages.textContent = `${book.pages} pages`;
    }
    card.appendChild(pages);

    //add buttons to book card
    const buttons = document.createElement('div');
    buttons.classList.add('card-buttons');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    readButton.textContent = 'Read';
    removeButton.textContent = 'Remove';
    readButton.classList.add('card-button');
    readButton.classList.add('button-green');
    removeButton.classList.add('card-button');
    removeButton.classList.add('button-grey');
    buttons.appendChild(readButton);
    buttons.appendChild(removeButton);
    card.appendChild(buttons);

    removeButton.addEventListener('click', () => {
        removeBookFromLibrary(book);
    })
    readButton.addEventListener('click', () => {
        readButton.
    })
    //add card to grid
    cardsGrid.appendChild(card);
    return card;
}
function submitModal(){
    addBookToLibrary(dialogTitle.value, dialogAuthor.value, formPages.value);
    closeModal();
}
function openModal(){
    dia.classList.remove('inactive');
    dia.classList.add('active');
    backdrop.classList.add('active');
    backdrop.classList.remove('inactive');
    dialogTitle.focus();
}
function closeModal(){
    dia.classList.remove('active');
    dia.classList.add('inactive');
    backdrop.classList.remove('active');
    backdrop.classList.add('inactive');
}
function removeBookFromLibrary(book){
    let hasTitle = myLibrary.includes(book);
    if (hasTitle) {
        let index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
    }
    displayBooks();
}
