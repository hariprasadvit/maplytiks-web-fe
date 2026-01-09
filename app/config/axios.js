/**
 * This is axios intercepter which intercepts all the incoming and outgoing requests
 */
import axios from 'axios';
import promise from 'promise';
import { BASE_URL } from 'config/apiEndPoints';

const request = axios;
request.defaults.withCredentials = true;
// request.defaults.headers.common.origin = 'www.maplytiks.com'; // for cookie based auth
request.interceptors.request.use(
  config => {
    if (!config.baseURL) {
      request.defaults.baseURL = BASE_URL;
      config.baseURL = BASE_URL; // eslint-disable-line no-param-reassign
    }
    return config;
  },
  error => promise.reject(error),
);

// eslint-disable-next-line arrow-body-style
request.interceptors.response.use(undefined, error => {
  // Handle your common errors here
  return Promise.reject(error);
});

export default request;
