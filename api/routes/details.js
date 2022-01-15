const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const sb = require('@supabase/supabase-js');


//supabase
const config = require('../supabase/config')

const supabase = sb.createClient(config.url, config.key)


//middlewares
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


//routes
router.get('/', (req, res) => {
    res.send('Fetching Details of employees and orders from database')
})


router.get('/employee', (req, res) => {
    supabase.from('employees').select()
    .then(data => {
        res.json(data.data)
    })
})


router.get('/feedback', (req, res) => {
    supabase.from('feedbacks').select()
    .then(data => {
        res.json(data.data)
    })
})


router.get('/orders/:status', (req, res) => {
    supabase.from('orders').select().match({status: req.params.status})
    .then(data => {
        res.json(data.data)
    })
})


module.exports = router