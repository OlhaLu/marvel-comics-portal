import axios from 'axios';

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: 'f367c5b99b3652be48ad9adf86fdb00b',
  },
});

export default marvelApi;
