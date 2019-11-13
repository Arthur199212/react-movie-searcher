import React from 'react'
import { Container, Grid } from '@material-ui/core'

import Movie from '../Movie'
import './movies.scss'

const Movies = () => {
  return (
    <Container className='movies_container' maxWidth='lg'>
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(id => (
          <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Movie key={id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Movies
