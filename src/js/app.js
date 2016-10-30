// import { combineReducers } from 'redux';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};

import todos from './reducers/todos';
import visibilityFilter from './reducers/visibility-filter';

const app = combineReducers({todos, visibilityFilter});

export default app;
