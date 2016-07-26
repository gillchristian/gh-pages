/**
 * Checks if a fetch request is ok and reads the json or rejects it
 *
 * @param {Object}  response
 * @returns {Object}
 */
export function readOrReject(response) {
  return response.ok ?
    response.json() : Promise.reject(response.text());
}
