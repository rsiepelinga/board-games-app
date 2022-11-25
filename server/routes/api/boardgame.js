const bgg = require('bgg-xml-api-client');
const express = require('express');
const Game = require('../../models/Game');

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

function getGame(gameId) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggThing({ id: gameId, stats: 1 });

    const isValid = handleResponse(res, reject);
    if (!isValid) { return; }

    resolve(new Game(res.data.item));
  });
}

router.get('/:gameId', (req, res) => {
  getGame(req.params.gameId)
    .then((result) => res.send(result))
    .catch((error) => res.status(error.code).send(error.message));
});

module.exports = router;