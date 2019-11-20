import 'core-js'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import { addMoviesData } from '../redux/actions'

import { FETCH_DATA } from '../api'
import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'
import Footer from './Footer'
import MovieDetails from './MovieDetails'
import NotFound from './NotFound'
import './app.scss'

const App = () => {
  const data = useSelector(({ moviesData }) => moviesData)

  const [value, setValue] = useState('')
  const [hideResults, setHideResults] = useState(true)
  const [showSpiner, setShowSpiner] = useState(true)
  const [searchData, setSearchData] = useState({
    query: '',
    searchBy: 'title',
    sortBy: 'release_date',
    offset: 0,
    limit: 8
  })

  const dispatch = useDispatch()

  useEffect(() => {
    FETCH_DATA(searchData)
      .then(data => {
        dispatch(addMoviesData(data))
        setShowSpiner(false)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }, [])

  const handleChangeSearchBy = tag => {
    setShowSpiner(true)
    setSearchData({
      ...searchData,
      searchBy: tag
    })

    FETCH_DATA({ ...searchData, searchBy: tag })
      .then(data => {
        dispatch(addMoviesData(data))
        setShowSpiner(false)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  const handleChangeSortBy = tag => {
    setShowSpiner(true)
    setSearchData({
      ...searchData,
      sortBy: tag
    })

    FETCH_DATA({ ...searchData, sortBy: tag })
      .then(data => {
        dispatch(addMoviesData(data))
        setShowSpiner(false)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  const handleChangeValue = ({ target: { value } }) => setValue(value)

  const handleSubmitQuery = e => {
    e.preventDefault()

    setShowSpiner(true)

    // TODO Validation
    if (value) {
      setSearchData({
        ...searchData,
        query: value,
        limit: 8
      })
      FETCH_DATA({ ...searchData, query: value, limit: 8 })
        .then(data => {
          dispatch(addMoviesData(data))
          setShowSpiner(false)
        })
        .catch(err => {
          console.log('Failed to get data:', err.message)
        })

      setValue('')
      setHideResults(false)
    } else {
      setShowSpiner(false)
    }
  }

  const handleLoadMore = () => {
    setShowSpiner(true)
    const risedLimit = searchData.limit + 8

    setSearchData({
      ...searchData,
      limit: risedLimit
    })

    FETCH_DATA({ ...searchData, limit: risedLimit })
      .then(data => {
        dispatch(addMoviesData(data))
        setShowSpiner(false)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  return (
    <Router>
      <CssBaseline />
      <div className='global_wrapper'>
        <div className='content_wrapper'>
          <Header />

          <Switch>
            <Route path={`/film/:movieId`}>
              <MovieDetails />
            </Route>
            <Route exact path='/'>
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
              <Movies
                movies={data.data}
                handleLoadMore={handleLoadMore}
                showSpiner={showSpiner}
              />
            </Route>
            <Route path=''>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
