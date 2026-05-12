let symbols = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ";

let lengthInput = document.getElementById("lengthInput");
let takeBookButton = document.getElementById("takeBookButton");
let bookTitle = document.getElementById("bookTitle");
let bookInfo = document.getElementById("bookInfo");
let bookText = document.getElementById("bookText");

function randomSymbol() {
    let index = Math.floor(Math.random() * symbols.length);
    return symbols[index];
}

function createRandomText(length) {
    let text = "";

    for (let i = 0; i < length; i++) {
        text += randomSymbol();
    }

    return text;
}

function takeBook() {
    let length = Number(lengthInput.value);
    let text = createRandomText(length);

    bookTitle.textContent = "Случайная книга";
    bookInfo.textContent = "Длина книги: " + length + " символов";
    bookText.textContent = text;
}

takeBookButton.addEventListener("click", takeBook);