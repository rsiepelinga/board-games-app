const bgg = require('bgg-xml-api-client');
const express = require('express');
const Game = require('../../models/Game');

const router = express.Router();

function getGame(gameId) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggThing({ id: gameId, stats: 1 });
    if (res.status !== 200) {
      reject({ code: res.status, message: res.statusText });
    }
    if (res.data.error) {
      reject({ code: res.status, message: res.data.error.message });
    }
    if (!res.data.item) {
      reject({ code: 400, message: 'The requested resource does not exist.' });
    }
    resolve(new Game(res.data.item));
  });
}

router.get('/:gameId', (req, res) => {
  getGame(req.params.gameId)
    .then((result) => res.send(result))
    .catch((error) => res.status(error.code).send(error.message));
});

module.exports = router;