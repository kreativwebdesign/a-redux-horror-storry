import React from "react";
import { Route } from "react-router-dom";
import UserList from '../user/components/UserList';
import Navbar from 'src/routing/Navbar';
import AppContainer from './AppContainer'
import styles from './styles/app.scss';
import './styles/root.scss'

const Index = () => <h2>Home</h2>;

const App = () => (
  <AppContainer>
    <main className={styles.app}>
      <Navbar />
      <section className={styles.pageBody}>

      <Route path="/" exact component={Index} />
      <Route path="/users/" component={UserList} />
      </section>
    </main>
  </AppContainer>
);

export default App;