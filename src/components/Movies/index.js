import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, CircularProgress } from '@material-ui/core'

import Movie from '../Movie'
import './movies.scss'

const Movies = ({ movies, handleLoadMore }) => {
  return (
    <Container className='movies_container' maxWidth='lg'>
      {movies.length !== 0 ? (
        <>
          <Grid container spacing={4}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Link to={`/film/${movie.id}`}>
                  <Movie movie={movie} />
                </Link>
              </Grid>
            ))}
          </Grid>
          <Button
            color='primary'
            className='load-more_btn'
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </>
      ) : (
        <div className='spiner_container'>
          <CircularProgress />
        </div>
      )}
    </Container>
  )
}

export default Movies
