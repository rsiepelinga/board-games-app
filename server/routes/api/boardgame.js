const bgg = require('bgg-xml-api-client');
const Game = require('../../models/Game.js');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Info: Boardgame API');
});

router.get('/:gameId', (req, res) => {
    getGame(req.params.gameId).then((result) => res.send(result));
})

async function getGame(gameId) {
  let res = await bgg.getBggThing({id: gameId, stats: 1});
  if(res.status !== 200) {
    return res.statusText;
  }
  if(res.data.error) {
    return res.data.error.message;
  }
  return new Game(res.data.item);
  // console.log(res.data.item)
}

module.exports = router;