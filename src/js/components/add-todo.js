import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../action-creators/todos';

// TODO: Demolish this global variable.
let nextTodoId = 0;

const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};


export default connect()(AddTodo);