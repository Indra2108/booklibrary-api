'use strict'

const booksLibrary = require("../assets/books")

const editBooks = (request, h) => {
    try {
        const { bookId } = request.params
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
        const updatedAt = new Date().toISOString()


        if (name === undefined || name === '' || name === null) {
            const response = h.response({
                status: 'fail',
                message: "Gagal memperbarui buku. Mohon isi nama buku"
            })
            response.code(400)
            return response
        }

        if (readPage > pageCount) {
            const response = h.response({
                status: "fail",
                message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
            })
            response.code(400)
            return response
        }

        const index = booksLibrary.findIndex(book => book.id === bookId)

        if (index !== -1) {
            booksLibrary[index] = {
                ...booksLibrary[index],
                name,
                year,
                author,
                summary,
                publisher,
                pageCount,
                readPage,
                reading,
                updatedAt
            }

            const response = h.response({
                status: 'success',
                message: 'Buku berhasil diperbarui'
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan'
        })
        response.code(404)
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

module.exports = editBooks