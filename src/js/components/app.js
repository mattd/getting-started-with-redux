import React from 'react';

import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import Footer from './footer';

const App = ({
    store
}) => (
    <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
    </div>
);

export default App;