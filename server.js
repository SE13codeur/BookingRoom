import express from 'express'
import mongoose from 'mongoose'

import routes from './routes/routes.js'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 888

const app = express()

app.use(express.json())

app.use(routes)

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.listen(PORT, () => {
    console.log(`The server is working on ${PORT}`)
})