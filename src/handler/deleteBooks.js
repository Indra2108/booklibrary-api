'use strict'

const booksLibrary = require("../assets/books")

const deleteBooks = (request, h) => {
    try {
        const { bookId } = request.params

        const index = booksLibrary.findIndex((book) => book.id === bookId)

        if (index !== -1) {
            booksLibrary.splice(index, 1)
            const response = h.response({
                status: 'success',
                message: 'Buku berhasil dihapus'
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan'
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

module.exports = deleteBooks