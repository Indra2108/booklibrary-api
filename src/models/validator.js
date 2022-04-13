'use strict'

const Joi = require("joi")

const inputDataSchema = Joi.object({
    name: Joi.string(),
    year: Joi.number(),
    author: Joi.string(),
    summary: Joi.string(),
    publisher: Joi.string(),
    pageCount: Joi.number(),
    readPage: Joi.number(),
    reading: Joi.boolean()
})

const outputDataSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    year: Joi.number(),
    author: Joi.string(),
    summary: Joi.string(),
    publisher: Joi.string(),
    pageCount: Joi.number(),
    readPage: Joi.number(),
    finished: Joi.boolean(),
    reading: Joi.boolean(),
    insertedAt: Joi.date().iso(),
    updatedAt: Joi.date().iso()
})

const simpleOutputDataSchema = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    publisher: Joi.string()
})

module.exports = { inputDataSchema, outputDataSchema, simpleOutputDataSchema }