import {
  ADD_MOVIES,
  SET_SEARCH_BY,
  SET_SORT_BY,
  SET_QUERY,
  RISE_LIMIT,
  SET_VALUE,
  DELETE_VALUE,
  SHOW_RESULTS,
  SPINER_TURN_ON,
  SPINER_TURN_OFF
} from '../constants'

export const addMoviesData = data => ({
  type: ADD_MOVIES,
  data
})

export const setSearchBy = data => ({
  type: SET_SEARCH_BY,
  data
})

export const setSortBy = data => ({
  type: SET_SORT_BY,
  data
})

export const setQuery = data => ({
  type: SET_QUERY,
  data
})

export const riseLimit = () => ({
  type: RISE_LIMIT
})

export const setValue = value => ({
  type: SET_VALUE,
  value
})

export const deleteValue = () => ({
  type: DELETE_VALUE
})

export const showResults = () => ({
  type: SHOW_RESULTS
})

export const spinerTurnOn = () => ({
  type: SPINER_TURN_ON
})

export const spinerTurnOff = () => ({
  type: SPINER_TURN_OFF
})
