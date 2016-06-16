import React from 'react'

import Profile from './profile/Profile'
import ReposList from '../containers/repos/ReposList.container'

import 'whatwg-fetch'

class App extends React.Component {
  componentWillMount(){
    this.props.getUser(this.props.username)
  }

  render(){
    const {
      profile,
      loading
    } = this.props

    if (loading) {
      return <span>Loading...</span>
    }

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <Profile user={profile} />
          </div>
          <div className="column">
            <ReposList username={'gillchristian'} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
