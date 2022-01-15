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
    res.send('Order related functions')
})


router.post('/add', (req, res) => {
    const date = new Date()
    const today = String(date.getFullYear()) + '-' + String(date.getMonth() + 1) + '-' + String(date.getDate())

    supabase.from('orders').insert([{
        name: req.body.name,
        email: req.body.email,
        flavour: req.body.flavour,
        quantity: req.body.quantity,
        order_date: today
    }])
    .then(data => {
        res.json(data)
    })
})


module.exports = router