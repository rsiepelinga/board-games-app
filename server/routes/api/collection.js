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

async function getCollectionDetails(collection, user) {
  return new Promise(async (resolve, reject) => {
    const bgIds = collection.map((element) => Number(element.objectid));
    const res = await bgg.getBggThing({ id: bgIds, stats: 1 });

    // I should write my own query so we don't need to deal with this but thats a later problem
    for (let i = 0; i < res.data.item.length; i += 1) {
      const index = collection.findIndex((r) => res.data.item[i].id === r.objectid);
      res.data.item[i].statistics.ratings.value = collection[index].stats.rating.value;
    }

    const validBgResponse = handleResponse(res, reject);
    if (!validBgResponse) { return; }

    resolve(new Collection(res.data, true, user));
  });
}

async function getCollection(name, details) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggCollection({ username: name, own: 1, stats: 1 });

    const validResponse = handleResponse(res, reject);
    if (!validResponse) { return; }

    if (!details) {
      resolve(new Collection(res.data, false, name));
    } else {
      resolve(getCollectionDetails(res.data.item, name));
    }
  });
}

async function getRatedGames(name, details) {
  return new Promise(async (resolve, reject) => {
    const res = await bgg.getBggCollection({ username: name, rated: 1, stats: 1 });

    const validResponse = handleResponse(res, reject);
    if (!validResponse) { return; }

    if (!details) {
      resolve(new Collection(res.data, false, name));
    } else {
      resolve(getCollectionDetails(res.data.item, name));
    }
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

router.get('/group/:usernames', (req, res) => {
  const usernames = req.params.usernames.split(';');

  const promises = [];
  usernames.forEach((name) => {
    promises.push(getCollection(name));
  });

  Promise.all(promises).then((results) => {
    res.send(results);
  });
});

router.get('/ratings/:usernames', (req, res) => {
  const usernames = req.params.usernames.split(';');

  const promises = [];
  usernames.forEach((name) => {
    promises.push(getRatedGames(name, true));
  });

  Promise.all(promises).then((results) => {
    const orderedData = [];
    results.forEach((collection) => {
      collection.collection.forEach((game) => {
        const index = orderedData.findIndex((r) => r.bid === game.details.id);
        if (index === -1) {
          orderedData.push({
            bid: game.details.id,
            details: game.details,
            image_url: game.image_url,
            tags: game.tags,
            contributors: game.contributors,
            ratings: [{ user: collection.user, rating: game.user_rating }],
            statistics: {
              number_rated: 1,
              mean_rating: game.user_rating
            }
          });
        } else {
          orderedData[index].ratings.push({ user: collection.user, rating: game.user_rating });
          const totalRating = (orderedData[index].statistics.mean_rating
            * orderedData[index].statistics.number_rated);
          orderedData[index].statistics.number_rated += 1;
          orderedData[index].statistics.mean_rating = (+totalRating + +game.user_rating)
            / orderedData[index].statistics.number_rated;
        }
      });
    });
    res.send(orderedData);
  });
});

module.exports = router;