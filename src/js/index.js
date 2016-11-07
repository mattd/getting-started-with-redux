require('../scss/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import app from './app';
import App from './components/app';

ReactDOM.render(
    <App store={createStore(app)} />,
    document.getElementById('root')
);
