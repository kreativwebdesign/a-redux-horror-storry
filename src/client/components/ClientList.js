import React from 'react'
import { connect } from 'react-redux'
import ClientRow from './ClientRow'
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from '../redux'

const ClientList = ({ fetchClients }) => {
  return (
    <WithHandledState
      stateSelector={selectors.selectComplete}
      whenEmpty={fetchClients}
    >
      {state =>
        state.list.map(clientId => (
          <ClientRow clientId={clientId} key={clientId} />
        ))
      }
    </WithHandledState>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch({ type: types.FETCH_CLIENT })
})

const Connected = connect(
  () => ({}),
  mapDispatchToProps
)(ClientList)

Connected.displayName = 'Clients'
Connected.url = '/clients'

export default Connected
