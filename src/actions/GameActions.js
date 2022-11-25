import { httpGet } from '../api';

function getCollectionData(username) {
  return httpGet(`http://localhost:8000/api/collection/${username}`)
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR getCollectionData', error);
    });
}

function getCollectionWithDetailsData(username) {
  return httpGet(`http://localhost:8000/api/collection/details/${username}`)
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR getCollectionWithDetailsData', error);
    });
}

function getGameData(gameId) {
  return httpGet(`http://localhost:8000/api/boardgame/${gameId}`)
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR getGameData', error);
    });
}

export {
  getCollectionData,
  getCollectionWithDetailsData,
  getGameData
};