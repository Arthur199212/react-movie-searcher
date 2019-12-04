import {
  ADD_MOVIE_DATA,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIE_DETAILS_FAILED,
  SET_DEFAULT_MOVIE_DATA
} from '../constants'

const initialState = {
  movie: {
    poster_path: '',
    title: '',
    release_date: '',
    overview: ''
  },
  loading: false
}

const movieDataSaga = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...initialState,
        loading: true
      }
    case ADD_MOVIE_DATA:
      return {
        movie: payload,
        loading: false
      }
    case FETCH_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        loading: false
      }
    case SET_DEFAULT_MOVIE_DATA:
      return initialState
    default:
      return state
  }
}

export default movieDataSaga
