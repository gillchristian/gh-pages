import React, {PropTypes} from 'react'

import Loading from '../common/Loading'
import Error from '../common/Error'
import Alert from '../common/Alert'
import Repo from './Repo'

const ReposList = ({list, loading, error}) => {
  const reposMap = () => list.map(item => <Repo key={item.id} repo={item}/>)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={error}/>
  }

  if (list.length < 1) {
    const message = "this user does not have gh-pages ¯\\_(ツ)_/¯"
    return <Alert message={message} />
  }
  return (
    <div className="pages">
      {reposMap()}
    </div>
  )
}

ReposList.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ReposList
