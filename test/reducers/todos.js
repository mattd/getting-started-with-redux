import test from 'ava';
import deepFreeze from 'deep-freeze';

import todos from 'reducers/todos';

test(
    'returns an empty array for an undefined state and unrecognized action',
    t => {
        const action = {type: 'FOO_BAR'};

        deepFreeze(action);

        t.deepEqual([], todos(undefined, action));
    }
);

test(
    'returns state unaltered for an unrecognized action',
    t => {
        const state = ['foo', 'bar'];
        const action = {type: 'FOO_BAR'};

        deepFreeze(state);
        deepFreeze(action);

        t.is(state, todos(state, action));
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

        deepFreeze(stateBefore);
        deepFreeze(action);

        t.deepEqual(stateAfter, todos(stateBefore, action));
    }
);
