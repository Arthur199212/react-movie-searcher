import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Container, Grid } from '@material-ui/core'

import { FETCH_DETAILED_DATA } from '../../api'
import './movieDetails.scss'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieData, setMovieData] = useState({})

  useEffect(() => {
    FETCH_DETAILED_DATA(movieId).then(data => {
      setMovieData(data)
    })
  }, [])

  return (
    <Container className='movie-detail_container' maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant='h5' gutterBottom>
            {movieData.title}
          </Typography>
          <img className='image' src={movieData.poster_path || ''} alt='' />
          <Typography variant='subtitle1' gutterBottom>
            Relese date: {movieData.release_date}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant='subtitle1' gutterBottom>
            Plot
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
