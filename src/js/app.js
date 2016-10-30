import { combineReducers } from 'redux';

import todos from './reducers/todos';
import visibilityFilter from './reducers/visibility-filter';

const app = combineReducers({
    todos,
    visibilityFilter
});

export default app;
