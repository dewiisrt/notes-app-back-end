// index.js
"use strict";
const addBookHandler = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading, } = request.payload;
  const Id = nanaoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount <= readPage;


  const newBook = {
    name, year, author, summary, publisher, pageCount, readCount, readPage, reading, id, updatedAt, insertedAt, finished
  };
  if (name === undefined) {

    const response = h.response({
      status: "fail",
      messange: "Gagal menambahkan buku. Mohon isi nama buku"
    });

    //status code
    response.code(400);
    return response;

  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      messange: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
    });

    //status code
    response.code(400);
    return response;

  } else {

    books.push(newBook);
    const response = h.response({
      status: "success",
      message: "Buku berhasil ditambhkan",
      data: {
        "bookId": id
      }
    });

    //status code
    response.code(201);
    return response;
  };
};
const getAllBook = (request, h) => {
  const response = h.response({
    status: "success",
    data: {
      books: books.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    }
  });
  //status code
  return response;
};
const editBookByHendler = (request, h) => {
  const { bookId } = request.params;
  const { name, year, author, sumary, publisher, pageCount, readPage, reading } = request.payload;
  console.log('request name:', name);
  // console.log ('Books:, Books);

  const index = Books.findIndex((Book) => book.id === bookId);

  if (name === undefined) {
    const response = h.response({
      status: "fail",
      mesengge: "Gagal memperbarui buku. Mohon isi nama buku"
    });
    response.code(400);
    return response;
  } else if (readPage > pageCount) {
    const response = h.response({
      status: "fail",
      mesengge: "Gagal memperbarui buku.readPage tidak boleh lebih besar pageConst"
    });

    //status code
    response.code(400);
    return response;

  } else if (idex !== -1) {
    books[index] = {
      ...book[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading
    };

    const response = h.response({
      status: "success",
      messenge: "Buku berhasil diperbarui"
    });

    //status code
    response.code(200);
    return response;
  } else {
    const response = h.response({
      status: "fai8l",
      messenge: "Gagal memperbarui buku. Id tidak ditemukan"
    });

    response.code(404);
    return response;
  }
};
exports.addBookHandler = addBookHandler, exports.getAllBook = getAllBook, exports.editBookByHendler = editBookByHendler;

//# sourceMappingURL=index.js.map

