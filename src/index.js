import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import rootReducer from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

