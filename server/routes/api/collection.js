const bgg = require('bgg-xml-api-client');
const express = require('express');
const Collection = require('../../models/Collection');

const router = express.Router();

function handleResponse(res, reject) {
  let isValid = true;
  if (res.status !== 200) {
    isValid = false;
    reject({ code: res.status, message: res.statusText });
  } if (res.data.error) {
    isValid = false;
    reject({ code: res.status, message: res.data.error.message });
  } if (!res.data.item) {
    isValid = false;
    reject({ code: 400, message: 'The requested resource does not exist.' });
  }
  return isValid;
}

async function getCollectionDetails(collection) {
  return new Promise(async (resolve, reject) => {
    const bgIds = collection.map((element) => Number(element.objectid));
    const res = await bgg.getBggThing({ id: bgIds, stats: 1 });

    const validBgResponse = handleResponse(res, reject);
    if (!validBgResponse) { return; }

    resolve(new Collection(res.data));
  });
}

async function getCollection(name, details) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggCollection({ username: name, own: 1, stats: 1 });

    const validResponse = handleResponse(res, reject);
    if (!validResponse) { return; }

    if (!details) {
      resolve(new Collection(res.data));
    }

    resolve(getCollectionDetails(res.data.item));
  });
}

router.get('/', (req, res) => {
  res.send('Info: Collection API');
});

router.get('/:userId', (req, res) => {
  getCollection(req.params.userId, false)
    .then((result) => res.send(result))
    .catch((error) => res.status(error.code).send(error.message));
});

router.get('/details/:userId', (req, res) => {
  getCollection(req.params.userId, true)
    .then((result) => res.send(result))
    .catch((error) => res.status(error.code).send(error.message));
});

router.get('/:usernames', (req, res) => {
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