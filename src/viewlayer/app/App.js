import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ClientRouter } from 'src/viewlayer/client'
import { BookingRouter } from 'src/viewlayer/booking'
import NavigationBar from 'src/routing/components/navigation-bar'
import AppContainer from './AppContainer'
import styles from './styles/app.scss'
import './styles/root.scss'

const Index = () => <h2>Home</h2>

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
