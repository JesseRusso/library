let myLibrary = [];
let currentPage = 1;
let booksPerPage = 10;

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const theStranger = new Book("The Stranger", "Albert Camus", 121);
const wind = new Book("The Name of The Wind", "Patrick Rothfuss", 454);
myLibrary.push(theStranger);
myLibrary.push(wind);

function addBookToLibrary(title, author, pages){
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}
addBookToLibrary("Meow?","Lando", 1);
addBookToLibrary("The Red Queen Theory", "Matt Ridley", 365);
addBookToLibrary("A Tale of Two Citiies", "Ray Bradbury", 300);
addBookToLibrary("The Life of Pie", "Yann Martel", 250);

console.log(myLibrary);

function displayBooks(){
    myLibrary.forEach()
}