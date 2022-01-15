const express = require('express')
const cookieParser = require('cookie-parser')


//routes
const auth = require('./routes/auth')
const user = require('./routes/user')
<<<<<<< HEAD
const details = require('./routes/details')
const orders = require('./routes/orders')
=======
const tasks = require('./routes/tasks')
>>>>>>> 6d5df2edeb8878d37247c7ab0b1a22df7983b0a0

const feedbacks = require('./routes/feedbacks')

const app = express()
<<<<<<< HEAD
app.listen(process.env.PORT || 8000)
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
=======
app.listen(8000, () => {
    console.log('Server is running on port 8000')
})
>>>>>>> 6d5df2edeb8878d37247c7ab0b1a22df7983b0a0

app.use(express.json())
app.use('/auth', auth)
app.use('/user', user)
<<<<<<< HEAD
app.use('/details', details)
app.use('/orders', orders)
=======
app.use('/feedbacks', feedbacks)
app.use('/tasks', tasks)
>>>>>>> 6d5df2edeb8878d37247c7ab0b1a22df7983b0a0

app.get('/', (req, res) => {
    res.send('Chocolate Factory')
})