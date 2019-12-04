import 'core-js'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import {
  setValue,
  loadMore,
  fetchMovies,
  setSearchBy,
  setQuery,
  setSortBy
} from '../redux/actions'

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
  const searchData = useSelector(({ searchData }) => searchData)
  const value = useSelector(({ inputValue }) => inputValue)

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  const handleChangeSearchBy = tag => {
    dispatch(setSearchBy(tag))
  }

  const handleChangeSortBy = tag => {
    dispatch(setSortBy(tag))
  }

  const handleChangeValue = ({ target: { value } }) => {
    dispatch(setValue(value))
  }

  const handleSubmitQuery = e => {
    e.preventDefault()

    if (value) history.push(`/search/${value.trim()}`)
  }

  const handleSerachForQuery = value => {
    if (value) {
      dispatch(setQuery(value.trim()))
    }
  }

  const handleLoadMore = () => {
    dispatch(loadMore())
  }

  return (
    <>
      <CssBaseline />
      <div className='global_wrapper'>
        <div className='content_wrapper'>
          <Header />

          <Switch>

            <Route exact path='/'>
              <Redirect to='/search' />
            </Route>
            <Route path='/search' >
              <Search
                value={value}
                searchBy={searchData.searchBy}
                onClick={handleChangeSearchBy}
                onChange={handleChangeValue}
                onSubmit={handleSubmitQuery}
              />
              <Sort
                moviesFound={data.movies.total}
                sortBy={searchData.sortBy}
                onClick={handleChangeSortBy}
              />
              <Switch>
                {[`/search/:query`, '/search'].map(route => (
                  <Route key={route} path={route}>
                    <Movies
                      movies={data.movies.data}
                      loading={data.loading}
                      handleLoadMore={handleLoadMore}
                      handleSerachForQuery={handleSerachForQuery}
                    />
                  </Route>
                ))}
              </Switch>
            </Route>
            <Route path={`/film/:movieId`}>
              <MovieDetails />
            </Route>
            <Route path=''>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
