import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './Components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const state = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDom.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
