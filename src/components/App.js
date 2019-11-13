import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'
import Footer from './Footer'
import './app.scss'

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className='global_wrapper'>
        <div className='content_wrapper'>
          <Header />
          <Search />
          <Sort />
          <Movies />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
