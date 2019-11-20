import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'

import './sort.scss'

const Sort = ({ hideResults, moviesFound, sortBy, onClick }) => {
  return (
    <Container className='sort_container'>
      <Typography variant='body1' component='h2'>
        {hideResults ? '' : `${moviesFound || 0} movies found`}
      </Typography>
      <div className='sort_controllers'>
        <Typography className='sort_title' variant='subtitle1'>
          Sort by
        </Typography>
        <Button variant={sortBy === 'release_date' ? 'contained' : 'outlined'} color='primary' className='sort_btn' onClick={() => onClick('release_date')}>
          Release date
        </Button>
        <Button variant={sortBy === 'vote_average' ? 'contained' : 'outlined'} color='primary' className='sort_btn' onClick={() => onClick('vote_average')}>
          Rating
        </Button>
      </div>
    </Container>
  )
}

export default Sort
