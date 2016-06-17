import React, {PropTypes} from 'react'

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
    const {loading} = this.props

    if (loading) {
      return <span>Loading...</span>
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
