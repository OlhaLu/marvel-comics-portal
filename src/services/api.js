import axios from 'axios';
import md5 from 'blueimp-md5';

axios.defaults.baseURL = 'https://gateway.marvel.com:443/v1/public/';
const apikey = 'f367c5b99b3652be48ad9adf86fdb00b';
const privatKey = 'b4290d569eee4a4f1d47ee2825f1cb0d2d469539';

let date;
let hash;

const getDate = () => {
  if (!date) {
    date = new Date().getTime();
  }
  return date;
};

const getHash = () => {
  if (!hash) {
    hash = md5(`${getDate()}${privatKey}${apikey}`);
  }
  return hash;
};

const authParams = `ts=${getDate()}&apikey=${privatKey}&hash=${getHash()}`;

export const findCharacter = name => {
  return `/characters?${authParams}&nameStartsWith=${name}`;
};

export const findCharacterById = id => {
  return `/characters/${id}?${authParams}`;
};

const getListComics = () => {
  return axios
    .get(`comics?apikey${apikey}`)
    .then(response => response.data)
    .catch(error => error);
};

const getAllCharacters = () => {
  return axios
    .get(`characters?apikey${apikey}`)
    .then(response => response.data)
    .catch(error => error);
};

const getCharacterById = characterId => {
  return axios
    .get(`characters/${characterId}?apikey=${apikey}`)
    .then(response => response.data)
    .catch(error => error);
};

const getListComicsCharacter = characterId => {
  return axios
    .get(`characters/${characterId}/comics?apikey=${apikey}`)
    .then(response => response.data)
    .catch(error => error);
};

export default {
  getListComics,
  getAllCharacters,
  getCharacterById,
  getListComicsCharacter,
};
