import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography, Container, Grid, CircularProgress } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import { fetchDetaledData } from '../../redux/actions'
import s from './movieDetails.scss'

const MovieDetails = ({ showSpiner }) => {
  const movieData = useSelector(({ movieData }) => movieData)
  const dispatch = useDispatch()
  const { movieId } = useParams()

  useStyles(s)

  useEffect(() => {
    dispatch(fetchDetaledData(movieId))
  }, [])

  const { poster_path = '', title = '', release_date, overview } = movieData

  return (
    <Container className='movie-detail_container' maxWidth='lg'>
      <Grid container spacing={3}>
        {!movieData.id && !showSpiner ?
          (
            <Typography variant="h6">
              Nothing found
            </Typography>
          ) : (
            <>
              {showSpiner && (
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
