const booksLibrary = require('../assets/books')

const getBooks = (request, h) => {
    try {
        const response = h.response({
            status: 'success',
            data: {
                booksLibrary
            }
        })
        response.code(200)
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

module.exports = getBooks