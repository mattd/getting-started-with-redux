require('../scss/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './components/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
