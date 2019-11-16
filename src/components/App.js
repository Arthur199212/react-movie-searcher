import 'core-js'
import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import FETCH_DATA from '../api'
import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'
import Footer from './Footer'
import './app.scss'

const App = () => {
  const [data, setData] = useState({ data: [] })
  const [value, setValue] = useState('')
  const [hideResults, setHideResults] = useState(true)
  const [searchData, setSearchData] = useState({
    query: '',
    searchBy: 'title',
    sortBy: 'release_date',
    offset: 0,
    limit: 8
  })

  useEffect(() => {
    FETCH_DATA(searchData)
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }, [])

  const handleChangeSearchBy = tag => {
    setSearchData({
      ...searchData,
      searchBy: tag
    })

    FETCH_DATA({ ...searchData, searchBy: tag })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  const handleChangeSortBy = tag => {
    setSearchData({
      ...searchData,
      sortBy: tag
    })

    FETCH_DATA({ ...searchData, sortBy: tag })
    .then(data => {
      setData(data)
    })
    .catch(err => {
      console.log('Failed to get data:', err.message)
    })
  }

  const handleChangeValue = ({ target: { value } }) => setValue(value)

  const handleSubmitQuery = e => {
    e.preventDefault()

    // TODO Validation
    if (value) {
      setSearchData({
        ...searchData,
        query: value,
        limit: 8
      })
      FETCH_DATA({ ...searchData, query: value, limit: 8 })
        .then(data => {
          setData(data)
        })
        .catch(err => {
          console.log('Failed to get data:', err.message)
        })

      setValue('')
      setHideResults(false)
    }
  }

  const handleLoadMore = () => {
    const risedLimit = searchData.limit + 8

    setSearchData({
      ...searchData,
      limit: risedLimit
    })
    
    FETCH_DATA({ ...searchData, limit: risedLimit })
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  return (
    <>
      <CssBaseline />
      <div className='global_wrapper'>
        <div className='content_wrapper'>
          <Header />
          <Search
            value={value}
            searchBy={searchData.searchBy}
            onClick={handleChangeSearchBy}
            onChange={handleChangeValue}
            onSubmit={handleSubmitQuery}
          />
          <Sort
            hideResults={hideResults}
            moviesFound={data.total}
            sortBy={searchData.sortBy}
            onClick={handleChangeSortBy}
          />
          <Movies movies={data.data} handleLoadMore={handleLoadMore} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
