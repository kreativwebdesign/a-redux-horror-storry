import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ClientRow from './ClientRow'
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from '../redux'

import styles from './styles/clientList.scss'

const ClientList = ({ fetchClients }) => {
  return (
    <WithHandledState
      stateSelector={selectors.selectComplete}
      whenEmpty={fetchClients}
    >
      {state => (
        <div className={styles.clientList}>
          <Link to="/clients/new">Neuer Kunde</Link>
          <table className={styles.table}>
            <tbody>
              {state.list.map(clientId => (
                <ClientRow clientId={clientId} key={clientId} />
              ))}
            </tbody>
          </table>
        </div>
      )}
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
