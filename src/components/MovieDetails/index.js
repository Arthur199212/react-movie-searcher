import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography, Container, Grid } from '@material-ui/core'

import { fetchDetaledData } from '../../redux/actions'
import './movieDetails.scss'

const MovieDetails = () => {
  const movieData = useSelector(({ movieData }) => movieData)
  const dispatch = useDispatch()
  const { movieId } = useParams()

  useEffect(() => {
    dispatch(fetchDetaledData(movieId))
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
