// --- action types ---
export const UPDATE_SEARCH_FIELD = 'UPDATE_SEARCH_FIELD'

/**
 * Update search field
 *
 * @param {String}  value
 * @returns {Object}  action object
 */
export const updateSearchField = value => ({
  type: UPDATE_SEARCH_FIELD,
  payload: value
})
