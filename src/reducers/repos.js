import {
  REQUEST_REPOS,
  REQUEST_REPOS_SUCCESS,
  REQUEST_REPOS_ERROR
} from '../actions/repos'

export const INITIAL_STATE = {
  loading: false,
  error: false,
  list: []
}

/**
 * User profile reducer
 */
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        loading: true
      }
    case REQUEST_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      }
    case REQUEST_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: `(╯°□°）╯︵ ┻━┻ ERROR! Maybe the user does not exist,
          or you reached the Github API request limit`
      }
    default:
      return state
  }
}
