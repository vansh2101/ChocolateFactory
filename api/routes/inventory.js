express = require('express');
router = express.Router();
const sb = require('@supabase/supabase-js');

const config = require('../supabase/config');
const supabase = sb.createClient(config.url, config.key)

router.get('/', (req, res) => {
    res.send("Inventory");
});

// get data from url and update the inventory
router.post('/update/:item', (req, res) => {
    const item = req.params.item;
    const quantity = req.body.quantity;
    const update = {
        quantity: quantity
    }
    supabase.update('inventory', { item: item }, update)
        .then(() => {
            res.send("Updated");
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router