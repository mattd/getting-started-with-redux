import React from 'react';

import store from '../store';
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

// TODO: Demolish this global variable.
let nextTodoId = 0;

// TODO: Find a better place for this function.
const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

const App = ({
    todos,
    visibilityFilter
}) => (
    <div>
        <AddTodo
            onAddClick={text =>
                store.dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text
                })
            }
        />
        <TodoList
            todos={
                getVisibileTodos(
                    todos,
                    visibilityFilter
                )
            }
            onTodoClick={id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }
        />
        <Footer />
    </div>
);

export default App;