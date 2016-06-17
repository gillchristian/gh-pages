import React, {PropTypes} from 'react'

import Loading from '../common/Loading'
import Error from '../common/Error'
import Repo from './Repo'

const ReposList = ({list, loading, error}) => {
  const reposMap = () => list.map(item => <Repo key={item.id} repo={item}/>)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={error}/>
  }
  return (
    <div className="pages">
      {reposMap()}
    </div>
  )
}
ReposList.PropTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ReposList
