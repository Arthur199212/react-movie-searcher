import {
  ADD_MOVIES,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_QUERY,
  RISE_LIMIT,
  SET_VALUE,
  DELETE_VALUE,
  SPINER_TURN_ON,
  SPINER_TURN_OFF,
  ADD_MOVIE_DATA,
  SET_DEFAULT_MOVIE_DATA
} from '../constants'
import { GET_URL, GET_DETAILED_URL } from '../../api'

const addMoviesData = payload => ({
  type: ADD_MOVIES,
  payload
})

const setSearchBy = payload => ({
  type: SET_SEARCH_BY,
  payload
})

const setSortBy = payload => ({
  type: SET_SORT_BY,
  payload
})

const setQuery = payload => ({
  type: SET_QUERY,
  payload
})

const riseLimit = () => ({
  type: RISE_LIMIT
})

const deleteValue = () => ({
  type: DELETE_VALUE
})

const spinerTurnOn = () => ({
  type: SPINER_TURN_ON
})

const spinerTurnOff = () => ({
  type: SPINER_TURN_OFF
})

export const setValue = payload => ({
  type: SET_VALUE,
  payload
})

const addMovieData = payload => ({
  type: ADD_MOVIE_DATA,
  payload
})

const setDefaultMovieData = () => ({
  type: SET_DEFAULT_MOVIE_DATA,
})

export const fetchData = subreddit => (dispatch, getState) => {
  const { searchData } = getState()

  dispatch(spinerTurnOn())

  fetch(GET_URL(searchData))
    .then(res => res.json())
    .then(data => {
      dispatch(addMoviesData(data))
      dispatch(spinerTurnOff())
    })
    .catch(err => {
      dispatch(spinerTurnOff())
      console.log('Failed to get data:', err.message)
    })
}

export const fetchDetaledData = subreddit => dispatch => {
  dispatch(setDefaultMovieData())

  fetch(GET_DETAILED_URL(subreddit))
    .then(res => res.json())
    .then(data => {
      dispatch(addMovieData(data))
    })
    .catch(err => {
      console.log('Failed to get detaild movie data:', err.message)
    })
}

export const changeSearchBy = subreddit => dispatch => {
  dispatch(setSearchBy(subreddit))
  dispatch(fetchData())
}

export const changeSortBy = subreddit => dispatch => {
  dispatch(setSortBy(subreddit))
  dispatch(fetchData())
}

export const makeQuery = subreddit => dispatch => {
  dispatch(setQuery(subreddit))
  dispatch(fetchData())
  dispatch(deleteValue())
}

export const loadMore = subreddit => dispatch => {
  dispatch(riseLimit())
  dispatch(fetchData())
}
