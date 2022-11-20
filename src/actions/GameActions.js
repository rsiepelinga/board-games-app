import { httpGet } from '../api';

function getCollectionData(username) {
  return httpGet('http://localhost:8000/api/collection/username/' + username)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error('ERROR getCollectionData', error);
    });
}

function getGameData(gameId) {
  return httpGet('http://localhost:8000/api/boardgame/' + gameId)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error('ERROR getGameData', error);
    });
}

export {
  getCollectionData,
  getGameData
};