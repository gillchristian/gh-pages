/**
 * Filters the repose that have Pages &
 * return only necessary properties
 *
 * @param {Array}  raw repos list
 * @returns {Array}  filtered repos list
 */
export function filterRepos(repos) {
  return repos
    .filter(repo => repo.has_pages && repo.homepage)
    .map(repo => (
      {
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        desc: repo.description,
        fork: repo.fork,
        languagesUrl: repo.languages_url,
        updatedAt: repo.updated_at,
        homepage: repo.homepage,
        stars: repo.stargazers_count,
        language: repo.language
      }
    ))
}
