import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = {}, action) => {
    return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                hello!
            </div>
        </Provider>
    );
  }
}

export default App;
