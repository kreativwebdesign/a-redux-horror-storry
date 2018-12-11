import React from 'react';
import { Route, Switch } from 'react-router-dom'
import ClientList from '../client-list';
import Client from '../client'

const ClientRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/clients" exact component={ClientList} />
        <Route path="/clients/new" component={Client} />
        <Route path="/clients/:clientId" component={Client} />
      </Switch>
    </>
  )
}

export default ClientRouter;