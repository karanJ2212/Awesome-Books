/* eslint-disable no-unused-vars */

const Title = document.querySelector(".title");
const author = document.querySelector(".author");
const registeredBooks = document.querySelector(".book-list");
const addButton = document.querySelector(".addbook");

let Books = [];


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
        <button class="button" onclick="UI.remove(${i})">remove</button>
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
  }
  
}

window.onload = () => {
  if (localStorage.getItem("Books")) {
    Books = JSON.parse(localStorage.getItem("Books"));
  }
  UI.addBooks();
};

//add

addButton.addEventListener("click", () => {
  const book = new Book(Title.value, author.value);
  Books.push(book);
  UI.addBooks();
  localStorage.setItem("Books", JSON.stringify(Books));
});


