import { SET_VALUE, DELETE_VALUE } from '../constants'

const inputValue = (state = '', { type, payload }) => {
  switch (type) {
    case SET_VALUE:
      return payload
    case DELETE_VALUE:
      return ''
    default:
      return state
  }
}

export default inputValue
