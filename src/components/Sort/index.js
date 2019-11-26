import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './sort.scss'

const Sort = ({ hideResults, moviesFound, sortBy, onClick }) => {
  useStyles(s)
  return (
    <Container className='sort_container'>
      <Typography className='results' variant='body1' component='h2'>
        {hideResults ? '' : `${moviesFound || 0} movies found`}
      </Typography>
      <div className='sort_controllers'>
        <Typography className='sort_title' variant='subtitle1'>
          Sort by
        </Typography>
        <Button
          className='sort_btn release_btn'
          variant={sortBy === 'release_date' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('release_date')}
        >
          Release date
        </Button>
        <Button
          className='sort_btn'
          variant={sortBy === 'vote_average' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('vote_average')}
        >
          Rating
        </Button>
      </div>
    </Container>
  )
}

export default Sort
