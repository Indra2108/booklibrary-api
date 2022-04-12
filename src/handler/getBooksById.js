const booksLibrary = require("../assets/books")

const getBooksById = (request, h) => {
    try {
        const { bookId } = request.params

        const book = booksLibrary.filter((book) => book.id === bookId)[0]

        if (book !== undefined) {
            const response = h.response({
                status: 'success',
                data: {
                    book
                }
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan'
        })
        response.code(404)
        return response 

    } catch (error) {
        const response = h.response({
            status: "error",
            message: "Internal Server Error",
            messageError: error
        })
        response.code(500)
        return response
    }
}

module.exports = getBooksById