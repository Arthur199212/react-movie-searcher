import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  rootReducer,
  rootSaga,
} from './reducers';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(sagaMiddleware)

  const composedEnhancers = composeWithDevTools(middlewareEnhancer)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store
}
