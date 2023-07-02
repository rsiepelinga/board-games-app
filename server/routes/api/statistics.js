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

async function getCollection(name, details) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggCollection({ username: name, own: 1, stats: 1 });

    const validResponse = handleResponse(res, reject);
    if (!validResponse) { return; }
      
    resolve(res.data.item);
  });
}

router.get('/:usernames', (req, res) => {
  const usernameString = req.params.usernames;
  const usernames = usernameString.split(';');

  const promises = [];
  usernames.forEach((name) => {
    promises.push(getCollection(name));
  });

  Promise.all(promises).then((results) => {
    let ids = [];

    results.forEach((result) => {
      result.forEach((r) => {
        if(!ids.includes(r.objectid)) {
          ids.push(r.objectid);
        }
      })
    });

    const promisesTwo = [];
    usernames.forEach((name) => {
      promisesTwo.push(bgg.getBggCollection({username: name, id: ids.toString(), stats: 1}));
    });

    Promise.all(promisesTwo).then((results) => {
      
      let games = new Map();
      results.forEach((result) => {
        let username = getUsername(result.config.url);
        result.data.item.forEach((game) => {
          if(!games.has(game.objectid)) {
            game.groupStats = {
              totalNumber: game.stats.rating.value !== 'N/A' ? 1 : 0,
              totalRating: game.stats.rating.value !== 'N/A' ? parseInt(game.stats.rating.value) : 0,
              averageRating: game.stats.rating.value !== 'N/A' ? parseInt(game.stats.rating.value) :0
            }
            game.groupStats.byUser =[{
              rating: game.stats.rating.value,
              username: username
            }]
            games.set(game.objectid, game);
          } else {
            game = games.get(game.objectid);
            if(game.stats.rating.value !== 'N/A') {
              game.groupStats.totalNumber++;
              game.groupStats.totalRating += parseInt(game.stats.rating.value);
              game.groupStats.averageRating = parseInt(game.groupStats.totalRating) / parseInt(game.groupStats.totalNumber);
            }
            game.groupStats.byUser.push({
              rating: game.stats.rating.value,
              username: username
            });
            games.set(game.objectid, game);
          }
        })
      })
      
      res.send(Array.from(games.values()));
    })

  });
});

function getUsername(s) {
  return s.substring(s.indexOf("username=") + 9, s.indexOf("&", s.indexOf("username=")));
}


module.exports = router;