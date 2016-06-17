import React from 'react'

import ReposList from '../containers/repos/ReposList.container'
import SearchBar from './search-bar/SearchBar'
import Footer from './footer/Footer'
import Loading from './common/Loading'
import Error from './common/Error'

import 'whatwg-fetch'

const App = ({error, loading}) => (
  <div className="Site">
    <main>
      <div className="container">
        <SearchBar />
        {
          error ?
            <Error /> : loading ? <Loading /> : <ReposList/>
        }
        </div>
      </main>
    <Footer />
  </div>
)


export default App
