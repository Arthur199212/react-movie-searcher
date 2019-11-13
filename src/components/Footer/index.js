import React from 'react'
import {
  Typography,
  AppBar,
  Container,
  Link,
  Toolbar,
  Button
} from '@material-ui/core'

import './footer.scss'

function Copyright () {
  return (
    <Typography variant='body2' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Developer
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  )
}

const Footer = () => {
  return (
    <footer>
      <AppBar position='static' style={{ padding: 0, margin: 0 }}>
        <Container maxWidth='lg' style={{ padding: 0 }}>
          <Toolbar className='footer_container'>
            <Copyright />
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  )
}

export default Footer
