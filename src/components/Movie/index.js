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

import './movie.scss'

const Movie = () => {

  return (
    <Card className='movie_container'>
      <CardActionArea>
        <CardMedia
          className='movie_media'
          // image='https://source.unsplash.com/random'
          image='https://images.unsplash.com/photo-1571063626111-1e534e42776a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'
          title='Title of a movie'
        />
        <CardContent className='card_content'>
          <Typography gutterBottom variant='h5' component='h2'>
            Movie Title
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
