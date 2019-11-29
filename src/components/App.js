import 'core-js'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
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

    if (value) dispatch(makeQuery(value))
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
    </>
  )
}

export default App
