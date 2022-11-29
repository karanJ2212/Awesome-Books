/* eslint-disable no-unused-vars */

const Title = document.querySelector(".title");
const author = document.querySelector(".author");
const registeredBooks = document.querySelector(".book-list");
const addButton = document.querySelector(".addbook");

let Books = [];

// function BookData() {

// }

// function remove(index) {

// }

// addButton.addEventListener("click", () => {
//   const book = {
//     Title: Title.value,
//     author: author.value,
//   };
//   Books.push(book);
//   BookData();
//   localStorage.setItem("Books", JSON.stringify(Books));
// });

/////////////////////////////////////////////////////////////////////////////////////////
// book class

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
      <div>
        <p class="Title">${Books[i].Title}</p>
        <p class="author">${Books[i].author}</p>
        <button class="button" onclick="remove(${i})">remove</button>
        <hr/>
      </div>
     `;
      Title.value = "";
      author.value = "";
      Title.focus();
    }
  }
}

window.onload = () => {
  if (localStorage.getItem("Books")) {
    Books = JSON.parse(localStorage.getItem("Books"));
  }
  UI.addBooks();
};
//store class

// dom events

//add
addButton.addEventListener("click", () => {
  const book = new Book(Title.value, author.value);
  // const book = {
  //   Title: Title.value,
  //   author: author.value,
  // };
  Books.push(book);
  UI.addBooks();
  localStorage.setItem("Books", JSON.stringify(Books));
});

//remove
function remove(index) {
  Books.splice(index, 1);
  UI.addBooks();
  localStorage.setItem("Books", JSON.stringify(Books));
}
