require('../scss/style.scss');

import * as React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './components/app';

const render = () => {
    ReactDOM.render(
        <App todos={store.getState().todos} />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();