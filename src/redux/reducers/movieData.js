import { ADD_MOVIE_DATA, SET_DEFAULT_MOVIE_DATA } from '../constants'

const initialData = { data: [] }

const movieData = (state = initialData, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE_DATA:
      return payload
    case SET_DEFAULT_MOVIE_DATA:
      return initialData
    default:
      return state
  }
}

export default movieData
