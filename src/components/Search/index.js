import React from 'react'
import { Container, TextField, Button, Typography } from '@material-ui/core'

import './header.scss'

const Search = () => {
  return (
    <Container className='serch_container'>
      <form noValidate autoComplete='off' className='form_container'>
        <TextField label='Query...' margin='normal' className='input_box' />

        <Button variant='contained' color='primary' className='form_btn'>
          Search
        </Button>
      </form>
      <div className='filter_container'>
        <Typography className='filter_title' variant='subtitle1'>Search by</Typography>
        <Button variant='contained' color='primary' className='filter_btn'>
          Title
        </Button>
        <Button variant='outlined' color='primary' className='filter_btn'>
          Genre
        </Button>
      </div>
    </Container>
  )
}

export default Search
