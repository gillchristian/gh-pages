import React, {PropTypes} from 'react'

import clasnames from 'classnames'

import Language from './Language'
import Desc from './Desc'

const Repo = ({repo}) => {
  const repoIconClass = clasnames('fa', 'repo-or-fork',{
    'fa-code-fork': repo.fork,
    'fa-book': !repo.fork
  })
  return (
    <div className="repoRow">
      <i className={repoIconClass}></i>
      <span className="starts">{repo.stars} <i className="fa fa-star"></i></span>
      <span><a href={repo.homepage} target="_blank">{repo.name}</a></span>
      <Desc text={repo.desc}/>
      <Language lang={repo.language} />
    </div>
  )
}

Repo.PropTypes = {
  repo: PropTypes.object.isRequired
}

export default Repo
