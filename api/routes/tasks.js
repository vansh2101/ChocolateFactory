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

router.post("/load", async (req, res) => {
    const data = await supabase
        .from('orders')
        .select('status')
        .match({status: 'pending'})
        .select('id')
        .then(data => {
            // return {data};
            if (data !== null) {
                res.send({data});
            } else {
                res.send({error: 'No pending orders'});
            }
        });
});

// Update the status of the task using the task id
router.post("/claim", async (req, res) => {
    const data = await supabase
        .from('orders')
        .update({status: "inprogress", email: "test@gmail.com"})
        .match({id: req.body.id})
        .then(data => {
            // return {data};
            if (data !== null) {
                res.send({data});
            } else {
                res.send({error: {error}});
            }
        });
});

router.post('/create', async (req, res) => {
    const data = await supabase
        .from('orders')
        .insert({
            name: req.body.name,
            email: req.body.email,
            flavour: req.body.flavour,
            quantity: req.body.quantity,
            status: "pending",
            order_date: new Date()
        })
        .then(data => {
            if (data !== null) {
                res.send({data});
            } else {
                res.send({error: 'Error creating order'});
            }
        });
});

router.post('/complete', async (req, res) => {
    const data = await supabase
        .from('orders')
        .update({status: "done"})
        .match({id: req.body.id})
        .then(data => {
            return {data};
        })
});

module.exports = router
