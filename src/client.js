import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'

import configureStore from './redux/store'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

hydrate(
  <Provider store={configureStore()}>
    <Router>
      <StyleContext.Provider value={{ insertCss }}>
        <App />
      </StyleContext.Provider>
    </Router>
  </Provider>,
  document.getElementById('root'),
  () => {
    document.getElementById('ssr-material-ui-styles').remove()
  }
)
