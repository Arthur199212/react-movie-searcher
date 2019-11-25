import 'core-js'
import React, { useEffect, useCallback, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { CssBaseline, CircularProgress } from '@material-ui/core'

import {
  addMoviesData,
  setSearchBy,
  setSortBy,
  setQuery,
  riseLimit,
  setValue,
  deleteValue,
  showResults,
  spinerTurnOn,
  spinerTurnOff
} from '../redux/actions'
import { preloadedState } from '../redux/reducers/searchData'

import { FETCH_DATA } from '../api'
import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'
import Footer from './Footer'
const MovieDetails = lazy(() => import('./MovieDetails'))
import NotFound from './NotFound'
import ErrorBoundary from './ErrorBoundary'
import './app.scss'

const App = () => {
  const data = useSelector(({ moviesData }) => moviesData)
  const searchData = useSelector(({ searchData }) => searchData)
  const value = useSelector(({ inputValue }) => inputValue)
  const hideResults = useSelector(({ hideResults }) => hideResults)
  const showSpiner = useSelector(({ showSpiner }) => showSpiner)

  const dispatch = useDispatch()

  useEffect(() => {
    FETCH_DATA(searchData)
      .then(data => {
        dispatch(addMoviesData(data))
        dispatch(spinerTurnOff())
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }, [])

  const handleChangeSearchBy = tag => {
    dispatch(spinerTurnOn())
    dispatch(setSearchBy(tag))

    FETCH_DATA({ ...searchData, searchBy: tag })
      .then(data => {
        dispatch(addMoviesData(data))
        dispatch(spinerTurnOff())
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  const handleChangeSortBy = tag => {
    dispatch(spinerTurnOn())
    dispatch(setSortBy(tag))

    FETCH_DATA({ ...searchData, sortBy: tag })
      .then(data => {
        dispatch(addMoviesData(data))
        dispatch(spinerTurnOff())
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }

  const handleChangeValue = useCallback(({ target: { value } }) => dispatch(setValue(value)), [value])

  const handleSubmitQuery = e => {
    e.preventDefault()

    dispatch(spinerTurnOn())

    // TODO Validation
    if (value) {
      dispatch(setQuery(value))

      FETCH_DATA({ ...searchData, query: value, limit: 8 })
        .then(data => {
          dispatch(addMoviesData(data))
          dispatch(spinerTurnOff())
        })
        .catch(err => {
          console.log('Failed to get data:', err.message)
        })

      dispatch(deleteValue())
      dispatch(showResults())
    } else {
      dispatch(spinerTurnOff())
    }
  }

  const handleLoadMore = useCallback(() => {
    dispatch(riseLimit())
    const risedLimit = searchData.limit + preloadedState.limit

    FETCH_DATA({ ...searchData, limit: risedLimit })
      .then(data => {
        dispatch(addMoviesData(data))
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }, [searchData])

  return (
    <Router>
      <ErrorBoundary>
        <CssBaseline />
        <div className='global_wrapper'>
          <div className='content_wrapper'>
            <Header />

            <Switch>
              <Route path={`/film/:movieId`}>
                <Suspense fallback={<div className='spiner_container'><CircularProgress /></div>}>
                  <MovieDetails />
                </Suspense>
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
      </ErrorBoundary>
    </Router>
  )
}

export default App
