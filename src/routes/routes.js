'use strict'

// Library
const Joi = require('joi')

// Handler
const addBooks = require('../handler/addBooks')
const getBooks = require('../handler/getBooks')
const getBooksById = require('../handler/getBooksById')
const editBooks = require('../handler/editBooks')
const deleteBooks = require('../handler/deleteBooks')

// Data Schema
const { inputDataSchema, outputDataSchema, simpleOutputDataSchema } = require('../models/validator')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
        options: {
            validate: {
                payload: inputDataSchema
            }
        }
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
        options: {
            response: {
                schema: Joi.array().items(simpleOutputDataSchema),
                failAction: 'log'
            }
        }
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBooksById,
        options: {
            response: {
                schema: Joi.array().items(outputDataSchema),
                failAction: 'log'
            }
        }
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooks,
        options: {
            validate: {
                payload: inputDataSchema
            }
        }
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooks
    }
]

module.exports = routes