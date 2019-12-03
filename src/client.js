import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './redux/store'

hydrate(
  <Provider store={configureStore(window.PRELOADED_STATE)}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
  () => {
    document.getElementById('ssr-material-ui-styles').remove()
  }
)
