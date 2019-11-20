import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

import configureStore from './redux/store'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
