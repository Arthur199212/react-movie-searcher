import { SHOW_RESULTS } from '../constants'

const hideResults = (state = true, { type }) => {
  switch (type) {
    case SHOW_RESULTS:
      return false
    default:
      return state
  }
}

export default hideResults
