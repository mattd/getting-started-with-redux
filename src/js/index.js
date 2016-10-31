require('../scss/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './components/app';

const render = () => {
    ReactDOM.render(
        <App {...store.getState()} />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();