import React from "react";
import { StoreProvider } from 'redux-react-hook';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from './redux/store';
import UserList from './user/components/UserList';
import Navbar from 'src/routing/Navbar';

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <StoreProvider value={store}>
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Index} />
        <Route path="/users/" component={UserList} />
      </div>
    </Router>
  </StoreProvider>
);

export default AppRouter;