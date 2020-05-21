import axios from 'axios';

axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public/';
const apikey = 'f367c5b99b3652be48ad9adf86fdb00b';

const getListComics = () => {
  return axios
    .get(`/comics?apikey${apikey}`)
    .then(response => response.data)
    .catch(error => error);
};

const getAllCharacters = () => {
  return axios
    .get(`/characters?apikey${apikey}`)
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
