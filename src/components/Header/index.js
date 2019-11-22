import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core'
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './header.scss'

const Header = () => {
  useStyles(s)
  return (
    <header>
      <AppBar position='static'>
        <Container maxWidth='lg' style={{ padding: 0 }}>
          <Toolbar className='header_toolbar'>
            <Link to='/'>
              <Typography variant='h6'>Movie searcher</Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}

export default Header
