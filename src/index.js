import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {} from 'dotenv/config';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import App from './App';
import combineReducer from './Componets/redux/combineReducer';
import rootSaga from './Componets/redux/saga/sagas';
import { loadState, saveState } from "./localStorage";

const persisteState = loadState();

// const initialStore = {action:{magic:[]},fetch:{news:[],stock:[], indicators: [], usd:[], euro:[]}, entry:{accounts:[]}};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducer, persisteState, composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware)));


store.subscribe(() => {
  saveState({
    fetch: store.getState().fetch,    
  });
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
