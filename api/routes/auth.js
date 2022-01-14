const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const sb = require('@supabase/supabase-js');


//supabase
const config = require('../supabase/config')

supabase = sb.createClient(config.url, config.key)


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Auth Screen')
})

router.post('/login', (req, res) => {
    supabase.auth.signIn({
        email: req.body.email,
        password: req.body.pass
    })
    .then(data => {
        res.json({
            authenticated: true,
            data: data,
            error: false
        })
    })
    .catch(err => {
        res.json({
            authenticated: false,
            data: err,
            error: true
        })
    })
})

router.post('/register', (req, res) => {
    supabase.auth.signUp({
        email: req.body.email,
        password: req.body.pass
    })
    .then(data => {
        res.json({
            registered: true,
            data: data,
            error: false
        })
    })
    .catch(err => {
        res.json({
            registered: false,
            data: err,
            error: true
        })
    })
})


module.exports = router