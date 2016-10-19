require('../scss/style.scss');

import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
        const onIncrement = () => {
            store.dispatch({ type: 'INCREMENT' });
        };

        const onDecrement = () => {
            store.dispatch({ type: 'DECREMENT' });
        };

        ReactDOM.render(
            <Counter
                value={store.getState()}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />,
            document.getElementById('root')
        );
};

store.subscribe(render);
render();
