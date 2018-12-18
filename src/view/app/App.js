import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ClientRouter } from 'src/view/client'
import { BookingRouter } from 'src/view/booking'
import NavigationBar from 'src/routing/components/navigation-bar'
import AppContainer from './AppContainer'
import styles from './styles/app.scss'
import './styles/root.scss'

const Index = () => <Redirect to="/clients" />

const App = () => (
  <AppContainer>
    <main className={styles.app}>
      <NavigationBar />
      <section className={styles.pageBody}>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/clients" component={ClientRouter} />
          <Route path="/bookings" component={BookingRouter} />
        </Switch>
      </section>
    </main>
  </AppContainer>
)

export default App
