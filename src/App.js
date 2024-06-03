
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './api/store';
import APIRequest from './components/APIRequest';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>PokeAPI Example</h1>
        <APIRequest />
      </div>
    </Provider>
  );
}

export default App;
