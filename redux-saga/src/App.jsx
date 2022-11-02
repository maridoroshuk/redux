import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
