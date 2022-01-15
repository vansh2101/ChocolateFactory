const express = require('express');
const router = express.Router();
const http = require('http');
const sb = require('@supabase/supabase-js');

//supabase
const config = require('../supabase/config');
const supabase = sb.createClient(config.url, config.key)


router.get("/", (req, res) => {
  res.send("Task manager")
});


// Update the status of the task using the task id
router.post("/claim", (req, res) => {
    supabase.from('orders')
        .update({status: "inprogress", employee: req.body.employee})
        .match({id: req.body.id})
        .then(data => {
            res.json(data)
        });
});


router.post('/complete', (req, res) => {
    supabase.from('orders')
        .update({status: "completed"})
        .match({id: req.body.id})
        .then(data => {
            res.json(data);
        })
});

module.exports = router
