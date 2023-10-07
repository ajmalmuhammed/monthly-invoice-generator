import express from 'express'
import dotenv from 'dotenv'
import * as bodyParser from 'body-parser'

import connectDB from '../config/ormconfig'
import authRoutes from './routes/auth'

dotenv.config()

//create db connection
connectDB

const app = express()
const port = process.env.SERVER_PORT || 8080

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', authRoutes)

app.listen(port, () => {
  console.log('Server has started on ', port)
})
