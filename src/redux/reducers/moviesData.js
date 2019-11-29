import { ADD_MOVIES } from '../constants'

const moviesData = (state = { data: [] }, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES:
      return payload
    default:
      return state
  }
}

export default moviesData
