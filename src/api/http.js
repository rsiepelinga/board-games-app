import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL || window.location.origin;

function httpGet(route, opts) {
  return axios.get(route, opts).then(
    (result) => result.data,
    (err) => Promise.reject(err)
  );
}

function httpPut(route, body) {
  return axios.put(route, body).then(
    (result) => result.data,
    (err) => Promise.reject(err)
  );
}

function httpPost(route, body) {
  return axios.post(route, body).then(
    (result) => result.data,
    (err) => Promise.reject(err)
  );
}

function httpDelete(route, opts) {
  return axios.delete(route, opts).then(
    () => 'success',
    (err) => Promise.reject(err)
  );
}

export {
  httpGet,
  httpPut,
  httpPost,
  httpDelete
};