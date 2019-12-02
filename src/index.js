import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'

import configureStore from './redux/store'

render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
