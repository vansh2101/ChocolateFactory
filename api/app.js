const express = require('express')

//routes
const auth = require('./routes/auth')
const user = require('./routes/user')


const app = express()
app.listen(process.env.PORT || 8000)

app.use('/auth', auth)
app.use('/user', user)

app.get('/', (req, res) => {
    res.send('Chocolate Factory API')
})