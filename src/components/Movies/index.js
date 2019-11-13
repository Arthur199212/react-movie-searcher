import React from 'react'
import { Paper } from '@material-ui/core';

import Movie from '../Movie'
import './movies.scss'

const Movies = () => {

  return (
    <Paper className='movies_container'>
      {[1,2,3,4,5,6].map(id => (
        <Movie key={id} />
      ))}
    </Paper>
  )
}

export default Movies
