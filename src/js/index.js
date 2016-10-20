require('../scss/style.scss');

import * as React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './app';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

store.subscribe(render);
render();
