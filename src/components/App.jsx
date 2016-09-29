import React, { PropTypes } from 'react'

import SearchBar from './search-bar/SearchBar'
import Footer from './layout/Footer'
import Header from './layout/Header'

const App = ({children}) => (
  <div className="Site">
    <main>
      <Header />
      <div className="fixed-header-fix" />
      <div className="container centered">
        <SearchBar />
        {children || null}
      </div>
    </main>
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

export default App
