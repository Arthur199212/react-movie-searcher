import { ADD_MOVIES, FETCH_MOVIES, FETCH_MOVIES_FAILED } from '../constants'

const initialState = {
  movies: {},
  loading: false
}

const moviesDataSaga = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true
      }
    case ADD_MOVIES:
      return {
        movies: payload,
        loading: false
      }
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default moviesDataSaga
