const bgg = require('bgg-xml-api-client');
const express = require('express');
const Collection = require('../../models/Collection');

const router = express.Router();

async function getCollection(name) {
  const res = await bgg.getBggCollection({ username: name, own: 1, stats: 1 });
  if (res.status !== 200) {
    return res.statusText;
  }
  if (res.data.error) {
    return res.data.error.message;
  }
  if (res.data.totalitems === '0') {
    return [];
  }

  const arr = [];
  res.data.item.forEach((element) => {
    const c = new Collection(element, name);
    arr.push(c);
  });
  return arr;
}

router.get('/', (req, res) => {
  res.send('Info: Collection API');
});

router.get('/username/:userId', (req, res) => {
  getCollection(req.params.userId).then((result) => res.send(result));
});

router.get('/usernames', (req, res) => {
  const usernameString = req.query.names;
  const usernames = usernameString.split(';');

  const promises = [];
  usernames.forEach((name) => {
    promises.push(getCollection(name));
  });

  Promise.all(promises).then((results) => {
    res.send(results);
  });
});

module.exports = router;