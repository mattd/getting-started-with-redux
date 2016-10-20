import * as React from 'react';

import store from './store';
import Counter from './components/counter';

class App extends React.Component {
    onIncrement() {
        store.dispatch({ type: 'INCREMENT' });
    }
    onDecrement() {
        store.dispatch({ type: 'DECREMENT' });
    }
    render() {
        return (
            <Counter
                value={store.getState()}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
            />
        );
    }
};

export default App;
