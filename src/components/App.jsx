import React from 'react'

import ReposList from '../containers/repos/ReposList.container'
import Footer from './footer/Footer'
import Loading from './common/Loading'

import 'whatwg-fetch'

class App extends React.Component {
  componentWillMount(){
    this.props.getUser(this.props.username)
  }

  render(){
    const {loading} = this.props

    if (loading) {
      return <Loading />
    }

    return (
      <div className="Site">
        <main>
          <div className="container">
            <ReposList username={'gillchristian'} />
            </div>
          </main>
        <Footer />
      </div>
    )
  }
}

export default App
