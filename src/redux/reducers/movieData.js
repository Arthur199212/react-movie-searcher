import { ADD_MOVIE_DATA, SET_DEFAULT_MOVIE_DATA } from '../constants'

const movieData = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE_DATA:
      return payload
    case SET_DEFAULT_MOVIE_DATA:
      return {}
    default:
      return state
  }
}

export default movieData
