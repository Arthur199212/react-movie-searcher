import React from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './movie.scss'

const Movie = ({ movie: { title, tagline, poster_path }}) => {
  useStyles(s)
  return (
    <Card className='movie_container'>
      <CardActionArea>
        <CardMedia
          className='movie_media'
          image={poster_path || '#'}
          title={ title || 'Title of a movie'}
        />
        <CardContent className='card_content'>
          <Typography gutterBottom variant='h5' component='h2'>
            {title || ''}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {tagline || ''}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Movie
