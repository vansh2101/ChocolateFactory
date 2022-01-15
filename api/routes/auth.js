const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const http = require('http')
const cookieParser = require('cookie-parser')
const sb = require('@supabase/supabase-js');


//supabase
const config = require('../supabase/config')

const supabase = sb.createClient(config.url, config.key)


//middlewares
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(cookieParser())


//routes
router.get('/', (req, res) => {
    res.send('Auth related functions')
})


router.post('/login', (req, res) => {
    supabase.auth.signIn({
        email: req.body.email,
        password: req.body.pass
    })
    .then(data => {        
        const post = http.request({
            host: 'localhost',
            port: '8000',
            path: '/user/attendance',
            method: 'POST',
            headers: {user: data.user.email}
        })
    
        post.end()

        res.json({data: data})
    })
})


router.post('/register', (req, res) => {
    supabase.auth.signUp({
        email: req.body.email,
        password: req.body.pass
    })
    .then(data => {
        res.json({data: data})
    })
})


module.exports = router