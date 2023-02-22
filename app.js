require('dotenv').config()
require('express-async-errors')

// init express app
const express = require('express')
const app = express()

// database 
const connectDB = require('./db/connect')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// route imports
const productRoutes = require('./routes/productRoutes')

// home route
app.get('/', (req, res) => {
    res.send('<h1>File Upload Starter </h1>')
})

// MIDDLEWARE
app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

// start app if connection to db is valid
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    
    } catch (error) {
        console.log(error)
    }
}

start()

