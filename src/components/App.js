import 'core-js'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import useStyles from 'isomorphic-style-loader/useStyles'

import {
  setValue,
  fetchData,
  changeSearchBy,
  changeSortBy,
  makeQuery,
  loadMore
} from '../redux/actions'

import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Movies from './Movies'
import Footer from './Footer'
import MovieDetails from './MovieDetails'
import NotFound from './NotFound'
import s from './app.scss'

const App = () => {
  const data = useSelector(({ moviesData }) => moviesData)
  const searchData = useSelector(({ searchData }) => searchData)
  const value = useSelector(({ inputValue }) => inputValue)
  const showSpiner = useSelector(({ showSpiner }) => showSpiner)

  const dispatch = useDispatch()

  const history = useHistory()

  useStyles(s)

  useEffect(() => {
    dispatch(fetchData(searchData))
  }, [])

  const handleChangeSearchBy = tag => {
    dispatch(changeSearchBy(tag))
  }

  const handleChangeSortBy = tag => {
    dispatch(changeSortBy(tag))
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
      dispatch(setValue(value.trim()))
      dispatch(makeQuery(value.trim()))
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
                moviesFound={data.total}
                sortBy={searchData.sortBy}
                onClick={handleChangeSortBy}
              />
              <Switch>
                {[`/search/:query`, '/search'].map(route => (
                  <Route key={route} path={route}>
                    <Movies
                      movies={data.data}
                      handleLoadMore={handleLoadMore}
                      showSpiner={showSpiner}
                      handleSerachForQuery={handleSerachForQuery}
                    />
                  </Route>
                ))}
              </Switch>
            </Route>
            <Route path={`/film/:movieId`}>
              <MovieDetails showSpiner={showSpiner} />
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
