import { SPINER_TURN_ON, SPINER_TURN_OFF } from '../constants'

const showSpiner = (state = true, { type }) => {
  switch (type) {
    case SPINER_TURN_ON:
      return true
    case SPINER_TURN_OFF:
      return false
    default:
      return state
  }
}

export default showSpiner
