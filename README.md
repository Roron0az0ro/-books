# -books
Books REST API
A simple RESTful API for managing a collection of books, built using Node.js and Express. Book data is stored in a local file called books.json (no database needed!).

 **Features**
View all books GET /books

Add a new book POST /books

Update a book by ID PUT /books/:id

Delete a book by ID DELETE /books/:id

Books are stored persistently in a file (books.json)

**Setup Instructions**
1. Clone or Create the Project Folder
bash
Copy
Edit
mkdir book-api
cd book-api
2. Initialize npm and Install Dependencies
bash
Copy
Edit
npm init -y
npm install express
3. Create the Required Files
# index.js (main server file)
Paste your server code here (with file-based storage support). [Ask me if you need the latest version again.]

# books.json
Create a new file named books.json in the root folder and add:

json
Copy
Edit
[]
**File Structure**
go
Copy
Edit
book-api/
├── index.js       // Main Express server
├── books.json     // Stores book data
├── package.json   // Project config

**Run the Server**
bash
Copy
Edit
node index.js
You should see:

csharp
Copy
Edit
Robot is listening at http://localhost:3000
**Test Your API Using Postman**
GET All Books
bash
Copy
Edit
GET http://localhost:3000/books
POST Add a Book
bash
Copy
Edit
POST http://localhost:3000/books
Body (raw, JSON):
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
PUT Update a Book
bash
Copy
Edit
PUT http://localhost:3000/books/1
Body:
{
  "title": "The Hobbit - Updated"
}
DELETE a Book
bash
Copy
Edit
DELETE http://localhost:3000/books/1
**Data Persistence**
All books are saved to books.json.

The file is updated automatically after every POST, PUT, or DELETE.

Restarting the server does not erase the book list.
