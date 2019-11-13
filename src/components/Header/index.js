import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core'

import './header.scss'

const Header = () => {
  return (
    <header>
      <AppBar position='static'>
        <Container maxWidth='lg' style={{padding: 0}}>
          <Toolbar className='header_toolbar'>
            <Typography variant='h6'>Movie searcher</Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
