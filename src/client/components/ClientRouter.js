import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ClientList from './ClientList';

const newClient = () => 'Neuer Kunde anlegen'
const ClientDetail = () => 'Das ist dein Kunde'
const ClientRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/clients" exact component={ClientList} />
        <Route path="/clients/new" component={newClient} />
        <Route path="/clients/:clientId" component={ClientDetail} />
      </Switch>
    </>
  )
}

export default ClientRouter;