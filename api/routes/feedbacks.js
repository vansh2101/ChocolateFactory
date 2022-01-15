// importing modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const sb = require('@supabase/supabase-js');

// supabase
const config = require('../supabase/config')
supabase = sb.createClient(config.url, config.key)

//middlewares
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/feedbacks', (req, res) => {
    const user = req.headers.user
    const feedback = req.body.feedback
    const email = req.body.email
    console.log(email)
    console.log(feedback)
    console.log(user)
    supabase.from('feedbacks').insert([{customer:user, email:email, feedback:feedback}])
    .then(data => console.log(data))
    res.json({"message": "Feedback sent"})
})


module.exports = router 