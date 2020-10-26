let myLibrary = [];

const Book = (title, author, pages, status) => {
  let bookTitle = title;
  let bookAuthor = author;
  let totalPages = pages;
  let readStatus = status;

  function setTitle(bTitle) {
    bookTitle = bTitle;
  }

  function setAuthor(bAuthor) {
    bookAuthor = bAuthor;
  }

  function setTotalPages(bPages) {
    totalPages = bPages;
  }

  function setStatus(bStatus) {
    readStatus = bStatus;
  }


  function getTitle() {
    return bookTitle;
  }

  function getAuthor() {
    return bookAuthor;
  }

  function getTotalPages() {
    return totalPages;
  }

  function getStatus() {
    return readStatus;
  }

  return {
    setTitle,
    setAuthor,
    setTotalPages,
    setStatus,
    getTitle,
    getAuthor,
    getTotalPages,
    getStatus,
  };
};

const addBookToLibrary = () => {
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value;
  const pageNum = document.getElementById('pageNum').value;
  const bookStatus = document.getElementById('readStatus').checked;

  const newBook = Book(bookTitle, bookAuthor, pageNum, bookStatus);
  myLibrary.push(newBook);
  console.log(myLibrary);
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
};

const toggleStatus = (book) => {
  book.status = !book.status;
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
};

const clearView = () => {
  document.querySelector('tbody').innerHTML = '';
};

const deleteBook = (bookId) => {
  myLibrary.splice(bookId, 1);
  localStorage.setItem('bookLibrary', JSON.stringify(myLibrary));
};

const LoopTheArray = () => {
  myLibrary.map(element => {
    const tableBody = document.querySelector('.body');
    const trow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdStatus = document.createElement('td');
    const deleteBtn = document.createElement('button');
    const tdButton = document.createElement('td');
    const toogleButton = document.createElement('button');
    const tdToggle = document.createElement('td');
    console.log(element);
    tdTitle.textContent = element.getTitle();
    tdAuthor.textContent = element.getAuthor();
    tdAge.textContent = element.getTotalPages();
    tdStatus.textContent = element.getStatus();
    deleteBtn.textContent = 'Delete';
    tdButton.appendChild(deleteBtn);
    deleteBtn.setAttribute('class', 'btnDelete');
    deleteBtn.setAttribute('data', myLibrary.indexOf(element));


    tdToggle.appendChild(toogleButton);
    toogleButton.setAttribute('class', 'toggle-button');
    toogleButton.textContent = 'Toggle';

    trow.appendChild(tdTitle);
    trow.appendChild(tdAuthor);
    trow.appendChild(tdAge);
    trow.appendChild(tdStatus);
    trow.appendChild(tdButton);
    trow.appendChild(tdToggle);


    toogleButton.addEventListener('click', () => {
      toggleStatus(element);
      tdStatus.textContent = element.getStatus;
    });


    deleteBtn.addEventListener('click', () => {
      deleteBtn.parentElement.parentElement.innerText = '';
      deleteBook(myLibrary.indexOf(element));
    });
    return (
      tableBody.appendChild(trow)
    );
  });
};

document.querySelector('.form').addEventListener('submit', (e) => {
  clearView();
  addBookToLibrary();
  LoopTheArray();
  e.preventDefault();
});

const loadLocalStorage = () => {
  if (localStorage.getItem('bookLibrary', JSON.stringify(myLibrary))) {
    myLibrary = JSON.parse(localStorage.getItem('bookLibrary'));
  } else {
    myLibrary = [];
  }
};

window.addEventListener('load', () => {
  loadLocalStorage();
  LoopTheArray();
});

// function Book(title, author, pageNumber, status = false) {
//   this.title = title;
//   this.pageNumber = pageNumber;
//   this.author = author;
//   this.status = status;
// }


const modal = document.getElementById('form-modal');

const addBookBtn = document.getElementById('addBookBtn');

const cancelBtn = document.getElementsByClassName('cancel-btn')[0];

const cancelFunc = () => {
  modal.style.display = 'none';
};

const blockFunc = () => {
  modal.style.display = 'block';
};

addBookBtn.addEventListener('click', blockFunc);

cancelBtn.addEventListener('click', cancelFunc);