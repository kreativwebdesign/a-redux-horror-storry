import React from "react";
import { StoreProvider } from 'redux-react-hook';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../redux/store';

const AppContainer = ({ children }) => (
  <StoreProvider value={store}>
    <Router>
      { children }
    </Router>
  </StoreProvider>
);

export default AppContainer;