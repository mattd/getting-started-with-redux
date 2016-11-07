import React from 'react';

// TODO: Demolish this global variable.
let nextTodoId = 0;

const AddTodo = (props, { store }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                store.dispatch({
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
AddTodo.contextTypes = {
    store: React.PropTypes.object
};

export default AddTodo;