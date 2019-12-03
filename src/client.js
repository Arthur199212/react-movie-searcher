import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/store'

const { store, persistor } = configureStore()
// const { store, persistor } = configureStore(window.PRELOADED_STATE)

hydrate(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
          <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
  () => {
    document.getElementById('ssr-material-ui-styles').remove()
  }
)
