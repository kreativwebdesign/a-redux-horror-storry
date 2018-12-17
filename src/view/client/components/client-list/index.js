import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import ClientRow from '../client-row'
import { connectors, types } from 'src/service/client'
import {
  isSucceededStatus,
  isFailedStatus
} from 'src/service/helper/status-helper'

import styles from './index.scss'

const ClientList = ({ fetchClients, list: clientList, status }) => {
  useEffect(() => {
    fetchClients()
  }, [])
  if (isSucceededStatus(status)) {
    return (
      <div className={styles.clientList}>
        <Link to="/clients/new">
          <Button
            color="green"
            content="Add new Client"
            icon="add"
            labelPosition="right"
          />
        </Link>
        <Table className={styles.table}>
          <Table.Body>
            {clientList.map(clientId => (
              <ClientRow clientId={clientId} key={clientId} />
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  } else if (isFailedStatus(status)) {
    return 'oh 👃🏻'
  }
  return 'Loading'
}

const mapDispatchToProps = dispatch => ({
  fetchClients: () =>
    dispatch({ type: types.FETCH.DO, payload: { from: 0, to: 30 } })
})

const Connected = connectors.fetchPaginated.connect(
  () => ({}),
  mapDispatchToProps
)(ClientList)

Connected.displayName = 'Clients'
Connected.url = '/clients'

export default Connected
