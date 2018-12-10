import React from "react";
import { Route, Switch } from "react-router-dom";
import ClientRouter from 'src/client/components/clientRouter';
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
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/clients" component={ClientRouter} />
      </Switch>
      </section>
    </main>
  </AppContainer>
);

export default App;