/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import { httpGet } from '../api';

function getCollectionData(username) {
  const userId = username || localStorage.getItem('bggUsername');
  return httpGet(`http://localhost:8000/api/collection/${userId}`)
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR getCollectionData', error);
    });
}

function getCollectionWithDetailsData(username) {
  const userId = username || localStorage.getItem('bggUsername');
  return httpGet(`http://localhost:8000/api/collection/details/${userId}`)
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