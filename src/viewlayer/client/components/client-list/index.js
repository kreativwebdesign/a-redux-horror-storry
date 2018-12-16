import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import ClientRow from '../client-row'
import { connectors, types } from 'src/datalayer/client'
import { SUCCESS } from 'src/api/constants'

import styles from './index.scss'

const ClientList = ({ fetchClients, list: clientList, status }) => {
  useEffect(() => {
    fetchClients()
  }, [])
  if (status === SUCCESS) {
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