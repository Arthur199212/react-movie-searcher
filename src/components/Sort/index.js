import React from 'react'
import { Typography, Button } from '@material-ui/core'

import './sort.scss'

const Sort = () => {
  return (
    <div className='sort_container'>
      <Typography variant='body1' component='h2'>
        7 movies found
      </Typography>
      <div className='sort_controllers'>
        <Typography className='sort_title' variant='subtitle1'>
          Sort by
        </Typography>
        <Button variant='outlined' color='primary' className='sort_btn'>
          Release date
        </Button>
        <Button variant='contained' color='primary' className='sort_btn'>
          Rating
        </Button>
      </div>
    </div>
  )
}

export default Sort
