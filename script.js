let myLibrary = [];
let currentPage = 1;
let booksPerPage = 10;

let cardsGrid = document.getElementById("grid");
const dia = document.getElementById("addBookModal");
const addBookButton = document.getElementById("addBook");
const cancelModal = document.getElementById('cancelModal');

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
})
addBookButton.addEventListener("click", () => {
    dia.style.display = 'flex';
    dia.showModal();
});
cancelModal.addEventListener("click", () => {
    closeModal();
});

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
}
addBookToLibrary("Meow?", "Lando", 1);
addBookToLibrary("The Red Queen Theory", "Matt Ridley", 365);
addBookToLibrary("A Tale of Two Citiies", "Ray Bradbury", 300);
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
function closeModal(){
    dia.style.display = 'none';
}
/* function createModal(){
    const modal = document.createElement('div');
    modal.setAttribute('id', 'addBookModal');

    const modalTitle = document.createElement('p');
    modalTitle.textContent = 'Add a new book to the library';
    modal.appendChild(modalTitle);

    const form = document.createElement('form');
    form.setAttribute('id', 'modalForm');

    const inputs = document.createElement('div');
    inputs.classList.add('book-inputs');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'dialogTitle');
    inputs.appendChild('titleLabel');

    const titleInput = document.createElement('text');
    titleInput.setAttribute('id', 'dialogTitle');
} */