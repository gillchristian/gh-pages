import React, {PropTypes} from 'react'

import Loading from '../common/Loading'
import Error from '../common/Error'
import Repo from './Repo'

class ReposList extends React.Component {
  componentWillMount(){
    this.props.getRepos(this.props.username)
  }

  reposMap() {
    return this.props.list
      .map(item => <Repo key={item.id} repo={item}/>)
  }

  render(){
    const {loading, error} = this.props

    if (loading) {
      return <Loading />
    }
    if (error) {
      return <Error message={error}/>
    }
    return (
      <div className="pages">
        {this.reposMap()}
      </div>
    )
  }
}
ReposList.PropTypes = {
  getRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ReposList
