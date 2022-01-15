const express = require('express')

//routes
const auth = require('./routes/auth')
const user = require('./routes/user')
const feedbacks = require('./routes/feedbacks')

const app = express()
app.use('/auth', auth)
app.use('/user', user)
app.use('/feedbacks', feedbacks)

app.get('/', (req, res) => {
    res.send('Chocolate Factory')
})
app.listen(process.env.PORT || 8000)