const bgg = require('bgg-xml-api-client');
const Collection = require('../../models/Collection.js');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Info');
});

router.get('/username/:userId', (req, res) => {
    getCollection(req.params.userId).then((result) => res.send(result));
})

router.get('/usernames', (req, res) => {
    const usernameString = req.query.names;
    let usernames = usernameString.split(';');

    let promises = [];
    usernames.forEach((name) => {
        promises.push(getCollection(name));
    });

    Promise.all(promises).then((results) => {
        res.send(results);
    })
});

async function getCollection(name) {
    let res = await bgg.getBggCollection({username: name, own: 1, stats: 1});
    if(res.status !== 200) {
        return res.statusText;
    }
    if(res.data.error) {
        return res.data.error.message;
    }
    if(res.data.totalitems === '0') {
        return [];
    }

    let arr = [];
    res.data.item.forEach(element => {
        let c = new Collection(element, name);
        arr.push(c);
    });
    return arr;
}

module.exports = router;
