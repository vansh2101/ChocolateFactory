const express = require('express')

//routes
const auth = require('./routes/auth')


const app = express()
app.listen(process.env.PORT || 8000)

app.use('/auth', auth)

app.get('/', (req, res) => {
    res.send('Hello World!!')
})