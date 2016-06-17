import {
  UPDATE_SEARCH_FIELD
} from '../actions/search'

export const INITIAL_STATE = {
  user: ""
}

export default search

/**
 * Search reducer
 */
function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
