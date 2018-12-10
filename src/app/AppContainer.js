import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../redux/store';

const AppContainer = ({ children }) => (
  <Provider store={store}>
    <Router>
      { children }
    </Router>
  </Provider>
);

export default AppContainer;