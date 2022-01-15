const express = require('express')

//routes
const auth = require('./routes/auth')
const user = require('./routes/user')
const tasks = require('./routes/tasks')


const app = express()
app.listen(8000, () => {
    console.log('Server is running on port 8000')
})

app.use(express.json())
app.use('/auth', auth)
app.use('/user', user)
app.use('/tasks', tasks)

app.get('/', (req, res) => {
    res.send('Chocolate Factory API')
})