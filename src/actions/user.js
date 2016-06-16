import 'whatwg-fetch'

// --- action types ---
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS'
export const REQUEST_USER_ERROR = 'REQUEST_USER_ERROR'
export const FETCH_USER = 'FETCH_USER'

/**
 * Request user action
 *
 * @returns {Object}  action object
 */
export function requestUser() {
  return {
    type: REQUEST_USER
  }
}

/**
 * Request user action success
 *
 * @param {Object}  response
 * @returns {Object}  action object
 */
export function requestUserSuccess(response) {
  return {
    type: REQUEST_USER_SUCCESS,
    payload: response
  }
}

/**
 * Request user action error
 *
 * @param {Object}  error
 * @returns {Object}  action object
 */
export function requestUserError(error) {
  return {
    type: REQUEST_USER_ERROR,
    payload: error,
    error: false
  }
}

/**
 * Fetch user
 *
 * @param {String}  username
 * @returns {Function}  thunk action
 */
export function fetchUser(username) {
  return function (dispatch) {
    dispatch(requestUser())
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => dispatch(requestUserSuccess(json)))
      .catch(err => dispatch(requestUserError(err)))
  }
}
