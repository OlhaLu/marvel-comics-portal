import axios from 'axios';

const marvelApi = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    apikey: 'f367c5b99b3652be48ad9adf86fdb00b',
  },
});

export default marvelApi;

// export const marvelApi = {
//   publicKey: 'f367c5b99b3652be48ad9adf86fdb00b',
//   privateKey: 'b4290d569eee4a4f1d47ee2825f1cb0d2d469539',
//   baseUrl: `${window.location.protocol || 'http'}//gateway.marvel.com:443`,
// };
