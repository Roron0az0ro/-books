const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const BOOKS_FILE = './books.json';

// 🔁 Load books from file
let books = [];
let currentId = 1;

function loadBooks() {
  try {
    const data = fs.readFileSync(BOOKS_FILE, 'utf-8');
    books = JSON.parse(data);
    if (books.length > 0) {
      currentId = Math.max(...books.map(b => b.id)) + 1;
    }
  } catch (err) {
    books = [];
    currentId = 1;
  }
}

// 💾 Save books to file
function saveBooks() {
  fs.writeFileSync(BOOKS_FILE, JSON.stringify(books, null, 2));
}

// 📚 Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// ➕ Add a book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Missing title or author' });
  }
  const newBook = { id: currentId++, title, author };
  books.push(newBook);
  saveBooks(); // save to file
  res.status(201).json(newBook);
});

// ✏️ Update a book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;
  saveBooks(); // save to file
  res.json(book);
});

// ❌ Delete a book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.splice(index, 1);
  saveBooks(); // save to file
  res.status(204).send();
});

// 🚀 Start server
app.listen(port, () => {
  loadBooks(); // load on startup
  console.log(`Robot is listening at http://localhost:${port}`);
});
