import React, {PropTypes} from 'react'

import clasnames from 'classnames'

const Repo = ({repo}) => {
  const repoIconClass = clasnames('fa',{
    'fa-code-fork': repo.fork,
    'fa-book': !repo.fork
  })
  return (
    <tr>
      <td className="is-icon">
        <i className={repoIconClass}></i>
      </td>
      <td><a href={repo.url}>{repo.name}</a></td>
      <td>{repo.desc}</td>
      <td>
        <i className="fa fa-star"></i> {repo.stars}
      </td>
      <td>{repo.updatedAt}</td>
      <td>{repo.language}</td>
    </tr>
  )
}

Repo.PropTypes = {
  repo: PropTypes.object.isRequired
}

export default Repo
