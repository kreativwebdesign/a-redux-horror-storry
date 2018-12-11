import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react';
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
          <Link to="/clients/new">
            <Button color="green" content="Add new Client" icon="add" labelPosition="right"/>
          </Link>
          <Table className={styles.table}>
            <Table.Body>
              {state.list.map(clientId => (
                <ClientRow clientId={clientId} key={clientId} />
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </WithHandledState>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchClients: () => dispatch({ type: types.FETCH.DO })
})

const Connected = connect(
  () => ({}),
  mapDispatchToProps
)(ClientList)

Connected.displayName = 'Clients'
Connected.url = '/clients'

export default Connected
