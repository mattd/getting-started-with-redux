import React from 'react';

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
                dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text: input.value
                });
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};


export default connect()(AddTodo);