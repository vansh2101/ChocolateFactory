const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const http = require('http')
const sb = require('@supabase/supabase-js');
const cookieParser = require('cookie-parser')


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
        if(data.user){
            res.cookie('session', data.user.email)
            const post = http.request({
                host: 'localhost',
                port: '8000',
                path: '/user/attendance',
                method: 'POST',
                headers: {user: data.user.email}
            })
        
            post.end()

            res.json(data)
        }
        else{
            res.json({error: 'Invalid Credentials'})
        }
    })
})


router.post('/register', (req, res) => {
    supabase.auth.signUp({
        email: req.body.email,
        password: req.body.pass
    }, {
        data: {
            admin: req.body.admin
        }
    })
    .then(data => {
        supabase.from('employees').insert([{
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary,
            last_workday: new Date().getDate() -1,
            Admin: req.body.admin
        }])
        .then(data => res.json({data: data}))
    })
})


router.get('/cookie', (req, res) => {
    res.json({email: req.cookies.session})
})


module.exports = router