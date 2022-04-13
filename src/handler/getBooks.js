const booksLibrary = require('../assets/books')

const getBooks = (request, h) => {
    try {
        const { name, reading, finished } = request.query

        // if name parameter exist
        if (name !== undefined) {
            const response = h.response({
                status: 'success',
                message: 'success search name',
                data: {
                    booksLibrary: booksLibrary
                        .filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
                        .map(b => ({
                            id: b.id,
                            name: b.name,
                            publisher: b.publisher
                        }))
                }
            })
            response.code(200)
            return response

        }

        // reading is false / 0
        if (reading === '0') {
            const response = h.response({
                status: 'success',
                message: 'success search not reading book',
                data: {
                    booksLibrary: booksLibrary
                        .filter(({ reading }) => reading === false)
                        .map(b => ({
                            id: b.id,
                            name: b.name,
                            publisher: b.publisher
                        }))
                }
            })
            response.code(200)
            return response
        }

        // reading is true / 1
        if (reading === '1') {
            const response = h.response({
                status: 'success',
                message: 'success search reading book',
                data: {
                    booksLibrary: booksLibrary
                        .filter(({ reading }) => reading === true)
                        .map(b => ({
                            id: b.id,
                            name: b.name,
                            publisher: b.publisher
                        }))
                }
            })
            response.code(200)
            return response
        }

        // finished is false / 0
        if (finished === '0') {
            const response = h.response({
                status: 'success',
                message: 'success search unfinished book',
                data: {
                    booksLibrary: booksLibrary
                        .filter(({ finished }) => finished === false)
                        .map(b => ({
                            id: b.id,
                            name: b.name,
                            publisher: b.publisher
                        }))
                }
            })
            response.code(200)
            return response
        }

        // finished is true / 1
        if (finished === '1') {
            const response = h.response({
                status: 'success',
                message: 'success search finished book',
                data: {
                    booksLibrary: booksLibrary
                        .filter(({ finished }) => finished === true)
                        .map(b => ({
                            id: b.id,
                            name: b.name,
                            publisher: b.publisher
                        }))
                }
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'success',
            data: {
                booksLibrary: booksLibrary.map(b => ({
                    id: b.id,
                    name: b.name,
                    publisher: b.publisher
                }))
            }
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