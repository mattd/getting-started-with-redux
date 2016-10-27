import todos from './reducers/todos';
import visibilityFilter from './reducers/visibility-filter';

const app = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};

export default app;
