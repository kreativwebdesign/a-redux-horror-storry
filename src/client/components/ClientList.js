import React from 'react';
import { connect } from 'react-redux';
import Client from './Client';
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from '../redux';

const ClientList = ({ fetchClients }) => {
  return (
    <WithHandledState stateSelector={selectors.selectComplete} whenEmpty={fetchClients}>
      { (state) => state.list.map(clientId => <Client clientId={clientId} key={ clientId} />) }
    </WithHandledState>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchClients: () => dispatch({ type: types.FETCH_CLIENT })
})

const Connected = connect(() => ({}), mapDispatchToProps)(ClientList)

Connected.displayName = 'Clients'
Connected.url = '/clients'

export default Connected