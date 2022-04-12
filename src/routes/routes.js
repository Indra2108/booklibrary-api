const addBooks = require('../handler/addBooks')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks
    }
]

module.exports = routes