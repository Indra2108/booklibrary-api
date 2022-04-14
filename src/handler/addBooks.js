'use strict'

const { nanoid } = require("nanoid")
const books = require('../assets/books')

const addBooks = (request, h) => {
    try {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        } = request.payload
        const id = nanoid(8)
        const insertedAt = new Date().toISOString()
        const updatedAt = insertedAt
        const finished = pageCount === readPage

        const newBook = {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            insertedAt,
            updatedAt
        }

        if (name === undefined || name === '' || name === null) {
            const response = h.response({
                status: 'fail',
                message: "Gagal menambahkan buku. Mohon isi nama buku"
            })
            response.code(400)
            return response
        }

        if (readPage > pageCount) {
            const response = h.response({
                status: "fail",
                message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
            })
            response.code(400)
            return response
        }

        books.push(newBook)

        const isSuccess = books.filter((book) => book.id).length > 0

        if (isSuccess) {
            const response = h.response({
                status: "success",
                message: "Buku berhasil ditambahkan",
                data: {
                    bookId: id
                }
            })
            response.code(201)
            return response
        }

    } catch (error) {
        const response = h.response({
            status: "error",
            message: "Internal Server Error",
        })
        response.code(500)
        return response
    }
}

module.exports = addBooks