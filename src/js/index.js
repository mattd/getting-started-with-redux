require('../scss/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import app from './app';
import App from './components/app';

class Provider extends React.Component {
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
};

ReactDOM.render(
    <Provider store={createStore(app)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
