import React from 'react'

import ReposList from '../containers/repos/ReposList.container'
import SearchBar from './search-bar/SearchBar'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Loading from './common/Loading'
import Error from './common/Error'

const App = ({error, loading}) => (
  <div className="Site">
    <main>
      <Header />
      <div className="fixed-header-fix" />
      <div className="container centered">
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
