const addBooks = require('../handler/addBooks')
const getBooks = require('../handler/getBooks')
const getBooksById = require('../handler/getBooksById')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksById
    }
]

module.exports = routes