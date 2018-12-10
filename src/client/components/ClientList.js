import React from 'react';
import { useDispatch } from 'redux-react-hook';
import Client from './Client';
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from '../redux';

const ClientList = () => {
  const fetchClient = useFetchClient();
  return (
    <WithHandledState stateSelector={selectors.selectComplete} whenEmpty={fetchClient}>
      { (state) => state.list.map(clientId => <Client clientId={clientId} key={ clientId} />) }
    </WithHandledState>
  )
}

const useFetchClient = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_CLIENT })
}


ClientList.displayName = 'Clients'
ClientList.url = '/clients'

export default ClientList