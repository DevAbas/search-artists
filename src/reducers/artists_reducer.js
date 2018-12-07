export default function(state={}, action) {
  switch(action.type) {
    case 'GET_ARTIST_BY_ID':
      return { ...state, artistData: action.payload }
    case 'GET_ALL_ARTISTS':
      return { ...state, artistList: action.payload }
    case 'GET_ARTIST_BY_KEYWORD':
      return { ...state, artistList: action.payload }
    case 'CLEAR_SELECTED_ARTIST':
      return { ...state, artistData: action.payload }
    default:
      return state
  }
}