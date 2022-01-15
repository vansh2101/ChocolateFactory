const express = require('express')
const cookieParser = require('cookie-parser')


//routes
const auth = require('./routes/auth')
const user = require('./routes/user')
const details = require('./routes/details')
const orders = require('./routes/orders')


const app = express()
app.listen(process.env.PORT || 8000)
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/auth', auth)
app.use('/user', user)
app.use('/details', details)
app.use('/orders', orders)

app.get('/', (req, res) => {
    res.send('Chocolate Factory API')
})