import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClientRouter from 'src/client/components/clientRouter'
import BookingRouter from 'src/booking/components/BookingRouter'
import Navbar from 'src/routing/Navbar'
import AppContainer from './AppContainer'
import styles from './styles/app.scss'
import './styles/root.scss'

const Index = () => <h2>Home</h2>

const App = () => (
  <AppContainer>
    <main className={styles.app}>
      <Navbar />
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
