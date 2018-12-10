import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import ClientList from './ClientList';

const newClient = () => 'Neuer Kunde anlegen'
const ClientDetail = () => 'Das ist dein Kunde'
const ClientRouter = () => {
  return (
    <>
      <Link to="/clients/new">Neuer Kunde</Link>
      <Link to="/clients/">Alle Kunden</Link>
      <Link to="/clients/4321">Detail Kunde</Link>
      <Switch>
        <Route path="/clients" exact component={ClientList} />
        <Route path="/clients/new" component={newClient} />
        <Route path="/clients/:clientId" component={ClientDetail} />
      </Switch>
    </>
  )
}

export default ClientRouter;