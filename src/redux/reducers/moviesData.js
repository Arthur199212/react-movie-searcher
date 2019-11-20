import { ADD_MOVIES } from '../constants'

const moviesData = (state = { data: [] }, { type, data }) => {
  switch (type) {
    case ADD_MOVIES:
      return data
    default:
      return state
  }
}

export default moviesData
