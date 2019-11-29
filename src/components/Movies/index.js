import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Button, CircularProgress, Typography } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import Movie from '../Movie'
import s from './movies.scss'

const Movies = ({ movies, handleLoadMore, showSpiner }) => {
  useStyles(s)
  return (
    <Container className='movies_container' maxWidth='lg'>
      {!movies.length && !showSpiner ? 
        (
          <Typography variant="h6">
            No movies found
          </Typography>
        ) : (
        <>
          <Grid className='grid_container' container spacing={4}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Link to={`/film/${movie.id}`}>
                  <Movie movie={movie} />
                </Link>
              </Grid>
            ))}
          </Grid>
          {showSpiner && (
            <div className='spiner_container'>
              <CircularProgress />
            </div>
          )}
          <Button
            color='primary'
            className='load-more_btn'
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        </>
        )}
    </Container>
  )
}

export default Movies
