import { httpGet } from '../api';

function getCollectionData(username) {
  return httpGet('/server/collection/username/' + username)
    .then(result => {
      return result;
    })
    .catch(error => {
      console.error('ERROR getCollectionData', error);
    });
}

export {
  getCollectionData
};