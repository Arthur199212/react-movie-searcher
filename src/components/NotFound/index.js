import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

const NotFound = () => (
  <Container maxWidth='lg'>
    <Typography variant='h5'>
      Error 404: Page not found
    </Typography>
  </Container>
)

export default NotFound
