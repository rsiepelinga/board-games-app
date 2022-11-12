const bgg = require('bgg-xml-api-client');
const Collection = require('../../models/Collection.js');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Info');
});

router.get('/:userId', (req, result) => {
    bgg.getBggCollection({username: req.params.userId, own: 1, stats: 1}).then((res) => {
        if(res.status !== 200) {
            result.send(res.statusText);
            return;
        }
        if(res.data.error) {
            result.send(res.data.error.message);
            return;
        }
        if(res.data.totalitems === '0') {
            result.send([]);
            return;
        }

        let arr = [];
        res.data.item.forEach(element => {
            let c = new Collection(element);
            arr.push(c);
        });
        result.send(arr);
    });
})


module.exports = router;
