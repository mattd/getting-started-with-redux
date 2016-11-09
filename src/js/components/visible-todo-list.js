import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../action-creators/todos';
import TodoList from './todo-list';

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

const mapStateToProps = (state) => {
    return {
        todos: getVisibileTodos(
            state.todos,
            state.visibilityFilter
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);