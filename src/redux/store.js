import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunkMiddleware)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(persistedReducer, preloadedState, composedEnhancers)

  const persistor = persistStore(store)

  return { store, persistor }
}
