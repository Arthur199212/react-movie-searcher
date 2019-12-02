import React from 'react'
import { Container, TextField, Button, Typography } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './header.scss'

const Search = ({ value, searchBy, onClick, onChange, onSubmit }) => {
  useStyles(s)
  return (
    <Container className='serch_container'>
      <form noValidate autoComplete='off' className='form_container' onSubmit={onSubmit} >
        <TextField
          label='Query...'
          margin='normal'
          className='input_box'
          value={value}
          onChange={onChange}
        />

        <Button
          variant='contained'
          color='primary'
          className='form_btn'
          onClick={onSubmit}
        >
          Search
        </Button>
      </form>
      <div className='filter_container'>
        <Typography className='filter_title' variant='subtitle1'>
          Search by
        </Typography>
        <Button
          className='filter_btn'
          variant={searchBy === 'title' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('title')}
        >
          Title
        </Button>
        <Button
          className='filter_btn genre_btn'
          variant={searchBy === 'genres' ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onClick('genres')}
        >
          Genre
        </Button>
      </div>
    </Container>
  )
}

export default Search