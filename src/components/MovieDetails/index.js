import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Container, Grid } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import { FETCH_DETAILED_DATA } from '../../api'
import s from './movieDetails.scss'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieData, setMovieData] = useState({})

  useStyles(s)

  useEffect(() => {
    FETCH_DETAILED_DATA(movieId)
      .then(data => {
        setMovieData(data)
      })
      .catch(err => {
        console.log('Failed to get data:', err.message)
      })
  }, [])

  return (
    <Container className='movie-detail_container' maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img className='image' src={movieData.poster_path || ''} alt='' />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='h5' gutterBottom>
            {movieData.title}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            Relese date: {movieData.release_date}
          </Typography>
          <Typography variant='body2' gutterBottom>
            {movieData.overview}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default MovieDetails
