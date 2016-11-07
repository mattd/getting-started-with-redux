import React from 'react';

import store from '../store';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import Footer from './footer';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;