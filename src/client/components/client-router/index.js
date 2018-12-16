import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClientList from '../client-list'
import { NewClient, EditClient } from '../client'

const ClientRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/clients" exact component={ClientList} />
        <Route path="/clients/new" component={NewClient} />
        <Route path="/clients/:clientId" component={EditClient} />
      </Switch>
    </>
  )
}

export default ClientRouter
