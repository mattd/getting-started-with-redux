require('../scss/style.scss');

import { createStore } from 'redux';

import app from './app';

const store = createStore(app);

console.log('Initial state:', store.getState());
console.log('----------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});
console.log('Current state:', store.getState());
console.log('----------');

console.log('Dispatching ADD_TODO again.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Keep Going'
});
console.log('Current state:', store.getState());
console.log('----------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});
console.log('Current state:', store.getState());
console.log('----------');

console.log('Dispatching SET_VISIBILITY_FILTER.');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log('Current state:', store.getState());
console.log('----------');
