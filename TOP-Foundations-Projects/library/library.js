//define an object with object literal syntax
const myLibrary = []; //initiate library

//GLOBAL values
const container = document.getElementById("cards-container"); //grab card container
const getTitle = document.getElementById("ftitle");
const getAuthor = document.getElementById("fauthor");
const getPages = document.getElementById("fpages");
const getStatus = document.getElementById("fstatus");
const submitButton = document.getElementById("submit-button");
const errorBox = document.getElementById("error-box");
const cardContainer = document.getElementById("cards-container");

//Book constructor
function Book(title, author, pages, status) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

//add book, using constructor, and push to library
function addBook(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.unshift(newBook);
}

//keeps the page from displaying nothing
function noEmpty() {
  if (cardContainer.innerHTML.trim() === "") {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="book-card example-remove example">
      <h3 class="example example-remove">Add a book!</h3>
      <p class="example example-remove">Author</p>
      <p class="example example-remove">Pages</p>
      <p class="example example-remove">Read Status</p>
      <button class="example example-remove status-btn">Change Status</button>
      <button class="example example-remove remove-btn">Remove</button>
    </div>`
    );
  }
}

noEmpty(); //make sure the page loads with something

//update remove buttons to operate
function removeBook() {
  //gather all the remove buttons
  let rmBtns = document.querySelectorAll(".remove-btn");

  //for each button in the array of remove buttons
  for (btn of rmBtns) {
    btn.addEventListener("click", function () {
      //pull class list which is [remove-btn, unique id]
      const rmBtnArray = Array.from(this.classList);
      //isolate id
      const idToRemove = rmBtnArray[1];
      //gather all elements with id in class name
      const cardToRemove = document.getElementsByClassName(rmBtnArray[1]);
      //find index of id to remove in myLibrary
      const indexToRemove = myLibrary.findIndex((x) => x.id === idToRemove);

      //remove it from myLibrary
      myLibrary.splice(indexToRemove, 1);

      //remove elements with id in class list
      while (cardToRemove.length > 0) {
        cardToRemove[0].parentNode.removeChild(cardToRemove[0]);
      }

      //incase every book is removed
      noEmpty();
    });
  }
}

//change read status
function changeStatus() {
  //gather all the status buttons
  let statBtns = document.querySelectorAll(".status-btn");

  //for each button in the array of status buttons
  for (btn of statBtns) {
    btn.addEventListener("click", function () {
      //pull class lists which is [status-btn, unique id]
      const statBtnArray = Array.from(this.classList);
      //isolates unique id
      const idToChange = statBtnArray[1];

      //update the myLibrary array with new read status
      const updateArray = myLibrary.map((x) => {
        //find which array object to update based on id
        if (x.id === idToChange) {
          //loop [not read -> in progress -> read] then replace all the cards
          if (x.status === "Not Read") {
            x.status = "In Progress";
            addCards();
          } else if (x.status === "In Progress") {
            x.status = "Read";
            addCards();
          } else if (x.status === "Read") {
            x.status = "Not Read";
            addCards();
          }
        }
      });
    });
  }
}

//load cards to page
function addCards() {
  //set card container to empty so repeat submissions don't duplicate library
  cardContainer.innerHTML = "";

  //add card for each book in library array with unique id in class list of each element
  myLibrary.forEach((book) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="book-card ${book.id}">
    <h3 class="${book.id}">${book.title}</h3>
    <p class="${book.id}">${book.author}</p>
    <p class="${book.id}">${book.pages}</p>
    <p class="${book.id}">${book.status}</p>
    <button class="status-btn ${book.id}">Change Status</button>
    <button class="remove-btn ${book.id}">Remove</button>
  </div>`
    );
  });

  removeBook(); //adds click listeners to each button
  changeStatus(); //adds click listeners to each button
}

//what to do when the submit button is hit
submitButton.addEventListener("click", () => {
  let inputTitle = getTitle.value;
  let inputAuthor = getAuthor.value;
  let inputPages = getPages.value;
  let inputStatus = getStatus.value;

  //empty error box if something was in it. that way on repeat it's clear
  errorBox.innerHTML = "";

  //check if anything is blank and put error if so
  function errorCheck() {
    errorBox.innerHTML = "";
    if (inputTitle === "") {
      errorBox.insertAdjacentHTML("beforeend", "<li>Input a Title!</li>");
    }
    if (inputAuthor === "") {
      errorBox.insertAdjacentHTML("beforeend", "<li>Input an Author!</li>");
    }
    if (inputPages === "") {
      errorBox.insertAdjacentHTML("beforeend", "<li>Input the pages!</li>");
    }
  }

  //run the error check on each click
  errorCheck();

  //if nothing in the error box, run the add book function with contents, reset inputs to blank, load cards to page
  if (errorBox.innerHTML === "") {
    addBook(inputTitle, inputAuthor, inputPages, inputStatus);
    getTitle.value = "";
    getAuthor.value = "";
    getPages.value = "";
    getStatus.value = "";
    addCards();
  }
});