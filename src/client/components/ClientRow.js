import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectors } from '../redux'

const ClientRow = ({ client }) => {
  if (!client) {
    return 'sorry client could not be found'
  }
  return (
    <tr>
      <td>{client.firstName}</td>
      <td>{client.lastName}</td>
      <td>{client.emailAddress}</td>
      <td><Link to={`/clients/${client.id}`}>Detail</Link></td>
    </tr>
  )
}

const mapStateToProps = (state, props) => ({
  client: selectors.selectDataById(props.clientId)(state)
})

export default connect(mapStateToProps)(ClientRow)
