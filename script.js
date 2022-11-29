/* eslint-disable no-unused-vars */
const date = new Date();
const showDateAndTime = document.querySelector('.date-and-time');
const Title = document.querySelector(".title");
const ListMenu = document.querySelector(".list");
const AddMenu = document.querySelector(".add");
const ContactMenu = document.querySelector(".contactmenu");
const author = document.querySelector(".author");
const registeredBooks = document.querySelector(".book-list");
const addButton = document.querySelector(".addbook");
const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
let Books = [];


showDateAndTime.innerHTML = `${date.toDateString()}, ${time}`



class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

//UI class

class UI {
  static addBooks() {
    registeredBooks.innerHTML = "";
    for (let i = 0; i < Books.length; i++) {
      registeredBooks.innerHTML += `
      <div class="title-and-author"> 
        <p class="Title">"${Books[i].title}" by  ${Books[i].author}</p>
        <button class="button" onclick="UI.remove(${i})">Remove</button>
      </div>

     `;
      Title.value = "";
      author.value = "";
      Title.focus();
    }
  }
  //remove

  static remove(index) {
    Books.splice(index, 1);
    UI.addBooks();
    localStorage.setItem("Books", JSON.stringify(Books));
    if (registeredBooks.innerHTML === "") {
      document.querySelector('.emptymsg').style.display = 'block';
      registeredBooks.style.border = 'none'
    }
  }

}

window.onload = () => {
  if (registeredBooks.innerHTML === "") {
    document.querySelector('.emptymsg').style.display = 'block';
    registeredBooks.style.border = 'none'
  } else {
    document.querySelector('.emptymsg').style.display = 'none';
  }
  if (localStorage.getItem("Books")) {
    Books = JSON.parse(localStorage.getItem("Books"));
    registeredBooks.style.border = '1px solid black';
    document.querySelector('.emptymsg').style.display = 'none';
  }
  UI.addBooks();

};

//add

addButton.addEventListener("click", (e) => {

  if (Title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const book = new Book(Title.value, author.value);
    Books.push(book);
    UI.addBooks();
    localStorage.setItem("Books", JSON.stringify(Books));
    document.querySelector('.emptymsg').style.display = 'none';
    registeredBooks.style.border = '1px solid black'
  }


});


ListMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'block';
  document.querySelector('.addbooks').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';

})
AddMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'none';
  document.querySelector('.addbooks').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';

})

ContactMenu.addEventListener('click', () => {

  document.querySelector('.booksdata').style.display = 'none';
  document.querySelector('.addbooks').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';

})



