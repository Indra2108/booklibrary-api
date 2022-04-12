const addBooks = require('../handler/addBooks')
const getBooks = require('../handler/getBooks')

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
    }
]

module.exports = routes