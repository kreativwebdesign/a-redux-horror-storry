import React from 'react'
import { connectors } from 'src/datalayer/client'
import { Link } from 'react-router-dom'

const ClientRow = ({ client }) => {
  if (!client) {
    return 'sorry client could not be found'
  }
  return (
    <tr>
      <td>{client.firstName}</td>
      <td>{client.lastName}</td>
      <td>{client.emailAddress}</td>
      <td>
        <Link to={`/clients/${client.id}`}>Detail</Link>
      </td>
    </tr>
  )
}

export default connectors.fetchSingle.connect()(ClientRow)
