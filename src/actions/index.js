import axios from 'axios';
const URL = 'http://localhost:3004';

export function getArtistById(artistId) {
  const request = axios.get(`${URL}/artists?id=${artistId}`)
    .then(response => response.data);
  
    return {
      type: 'GET_ARTIST_BY_ID',
      payload: request
    }
}

export function getArtistByKeyword(keyword) {
  const request = axios.get(`${URL}/artists?q=${keyword}`)
    .then(response => response.data);

    return {
      type: 'GET_ARTIST_BY_KEYWORD',
      payload: request
    }
}

export function getAllArtists() {

  const request = axios.get(`${URL}/artists?_limit=6`)
    .then(response => response.data)

  return {
    type: 'GET_ALL_ARTISTS',
    payload: request
  }
}

export function clearSelectedArtist() {
  return {
    type: 'CLEAR_SELECTED_ARTIST',
    payload: null
  }
}