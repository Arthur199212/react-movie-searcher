import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography, Container, Grid, CircularProgress } from '@material-ui/core'

import { fetchMovieDetails, setDefaultMovieData } from '../../redux/actions'
import './movieDetails.scss'

const MovieDetails = () => {
  const movieData = useSelector(({ movieData }) => movieData)
  const dispatch = useDispatch()
  const { movieId } = useParams()

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId))

    return () => {
      dispatch(setDefaultMovieData())
    }
  }, [])

  const { movie: { poster_path, title, release_date, overview, id }, loading } = movieData

  return (
    <Container className='movie-detail_container' maxWidth='lg'>
      <Grid container spacing={3}>
        { !id && !loading ?
          (
            <Typography variant="h6">
              Nothing found
            </Typography>
          ) : (
            <>
              {loading && (
                <Grid item xs={12} className='spiner_container'>
                  <CircularProgress />
                </Grid>
              )}

              <Grid item xs={12} sm={4}>
                <img className='image' src={poster_path || ''} alt='' />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant='h5' gutterBottom>
                  {title}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  {release_date && `Relese date: ${release_date}`}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {overview}
                </Typography>
              </Grid>
            </>
          )}
      </Grid>
    </Container>
  )
}

export default MovieDetails
