import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/store'

const { store, persistor } = configureStore()

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
