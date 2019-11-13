import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'

const App = () => {
  return (
    <>
      <CssBaseline />

      <Header />

      <Search />

      <Sort />

      <Movies />
    </>
  )
}

export default App
