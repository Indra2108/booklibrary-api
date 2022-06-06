'use strict'

const books = require('../assets/books')

const getBooks = (request, h) => {
    try {

        const { name, reading, finished } = request.query;

        let filteredBooks = books;

        if (name) {
            filteredBooks = books.filter((book) => new RegExp(name, 'i').test(book.name));
        }

        if (reading !== undefined) {
            filteredBooks = books.filter((book) => !!Number(reading) === book.reading);
        }

        if (finished !== undefined) {
            filteredBooks = books.filter((book) => !!Number(finished) === book.finished);
        }

        const response = h.response({
            status: 'success',
            data: {
                books: filteredBooks.map(({ id, name: bookName, publisher }) => (
                    { id, name: bookName, publisher }
                )),
            },
        })
        response.code(200)
        return response

    } catch (error) {
        const response = h.response({
            status: "error",
            message: "Internal Server Error"
        })
        response.code(500)
        return response
    }
}

module.exports = getBooks