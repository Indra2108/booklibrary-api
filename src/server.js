'use strict'

const Hapi = require('@hapi/hapi')
const routes = require('./routes/routes')

const init = async () => {
    const port = process.env.PORT || 3001
    const host = process.env.HOST || '0.0.0.0'

    const server = Hapi.server({
        port: port,
        host: host,
        routes: {
            cors: {
                origin: ['*']
            }
        }
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