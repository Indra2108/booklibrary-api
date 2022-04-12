'use strict'

const Hapi = require('@hapi/hapi')
const routes = require('./routes/routes')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    server.route(routes)

    await server.start()
    console.log(`Server running at ${server.info.uri}`)
}

process.on('unhandledRejection', (error) => {
    console.log(error)
    process.exit(1)
})

init()