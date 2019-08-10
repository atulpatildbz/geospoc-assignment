import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose;

ReactDOM.render(
    <Provider store={createStore(reducers, composeEnhancers(applyMiddleware()))}>
        <App />
    </Provider>
    , document.getElementById('root'))