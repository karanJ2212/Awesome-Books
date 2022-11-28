/* eslint-disable no-unused-vars */

const Title = document.querySelector('.title');
const author = document.querySelector('.author');
const registeredBooks = document.querySelector('.book-list');
const addButton = document.querySelector('.addbook');

let Books = [];

function BookData() {
  registeredBooks.innerHTML = '';
  for (let i = 0; i < Books.length; i++) {
    registeredBooks.innerHTML += `
    <div>
      <p class="Title">${Books[i].Title}</p>
      <p class="author">${Books[i].author}</p>
      <button class="button" onclick="remove(${i})">remove</button>
      <hr/>
    </div>
   `;
    Title.value = '';
    author.value = '';
  }
}

function remove(index) {
  Books.splice(index, 1);
  BookData();
  localStorage.setItem('Books', JSON.stringify(Books));
}

window.onload = () => {
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
  BookData();
};

addButton.addEventListener('click', () => {
  const book = {
    Title: Title.value,
    author: author.value,
  };
  Books.push(book);
  BookData();
  localStorage.setItem('Books', JSON.stringify(Books));
});
