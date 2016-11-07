require('../scss/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import app from './app';
import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(app)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
