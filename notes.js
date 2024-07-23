//const notes = [
// {
// id: string,
//  title: string,
// createdAt: string,
// updatedAt: string,
//  tags: array,
//  body: string,
//},
//];

//module.exports = notes;
//const nanoid = require('nanoid');

//app.post('/books', (req, res) => {
//  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

//if (!name) {
//  return res.status(400).json({
//    status: 'fail',
//  message: 'Gagal menambahkan buku. Mohon isi nama buku',
//       });
// }

// if (readPage > pageCount) {
//   return res.status(400).json({
//      status: 'fail',
//    message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
//});
// }

/// const bookId = nanoid();
// const insertedAt = new Date().toISOString();
//    const updatedAt = insertedAt;
//  const finished = pageCount === readPage;

//const newBook = {
//  id: bookId,
//name,
//        year,
//      author,
//    summary,
//  publisher,
//pageCount,
//        readPage,
//      finished,
//    reading,
//  insertedAt,
//updatedAt,
//    };

//    books.push(newBook);

//    res.status(201).json({
//      status: 'success',
//    message: 'Buku berhasil ditambahkan',
//  data: {
//    bookId,
//        },
//  });
//});
const express = require('express');
const app = express();

app.post('/upload', (req, res) => {
  // Handle file upload logic here
  console.log('File uploaded successfully!');
  res.send('File uploaded successfully!');
});

const url = `http://localhost:9000/upload`;
console.log(`API endpoint URL: ${url}`);

app.listen(9000, () => {
  console.log('Server started on port 3000');
});