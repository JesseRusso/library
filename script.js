let myLibrary = [];
let currentPage = 1;
let booksPerPage = 10;

let cardsGrid = document.getElementById("grid");
const dia = document.querySelector(".modal");
const overlay = document.getElementById('backdrop');
const addBookButton = document.getElementById("addBook");
const cancelModal = document.getElementById('cancelModal');
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
cancelModal.addEventListener("click", (e) => {
    closeModal();
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
    while (cardsGrid.firstChild) {
        cardsGrid.removeChild(cardsGrid.firstChild);
    }
    myLibrary.forEach((e) => {
        newCard(e);
    });
}

function newCard (book){
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.innerText = book.title;
    title.classList.add("book-title");

    const author = document.createElement("div");
    author.innerText = book.author;
    author.classList.add("book-author");
    card.appendChild(title);
    card.append(author);
    cardsGrid.appendChild(card);
    return card;
}
function submitModal(){
    console.log('pressed');
    addBookToLibrary(dialogTitle.value, dialogAuthor.value, formPages.value);
    closeModal();
}
function openModal(){
    dia.classList.remove('inactive');
    dia.classList.add('active');
    backdrop.classList.add('active');
    backdrop.classList.remove('inactive');
}
function closeModal(){
    dia.classList.remove('active');
    dia.classList.add('inactive');
    backdrop.classList.remove('active');
    backdrop.classList.add('inactive');
}
