/**
 * Filters API response to get the repos with pagens only
 *
 * @param {Array} fetch response
 * @param {String} username
 * @returns {Array} filtered array
 */
export const filterReposWithPages = (list, username) => {
  return list
    .filter(repo => repo.has_pages)
    .map(repo => (
      {
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        desc: repo.description,
        fork: repo.fork,
        languagesUrl: repo.languages_url,
        updatedAt: repo.updated_at,
        homepage: repo.homepage || buildRepoPage(repo.owner.login, repo.name),
        stars: repo.stargazers_count,
        language: repo.language,
        isOwn: repo.owner.login === username,
        owner: {
          name: repo.owner.login,
          url: repo.owner.html_url
        }
      }
    ))
}


/**
 * Returns the gh-pages from username and reponame
 *
 * @param {String}  username
 * @param {String}  repo name
 * @returns {String}  repo page
 */
function buildRepoPage(user, repo) {
  return `http://${user}.github.io/${repo}`
}
