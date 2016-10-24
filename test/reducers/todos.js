import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from 'reducers/todos';

test(
    'returns an empty array for an undefined state and unrecognized action',
    t => {
        t.deepEqual([], todos(undefined, {type: 'FOO_BAR'}));
    }
);

test(
    'returns state unaltered for an unrecognized action',
    t => {
        const state = ['foo', 'bar'];
        t.is(state, todos(state, {type: 'FOO_BAR'}));
    }
);

test(
    'adds a todo to state when action type is ADD_TODO',
    t => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        }];
        t.deepEqual(stateAfter, todos(stateBefore, action));
    }
);
