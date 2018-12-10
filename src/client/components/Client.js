import React from 'react';
import { connect } from 'react-redux'
import { selectors } from '../redux';

const Client = ({ client }) => {
  if (!client) {
    return 'sorry client could not be found'
  }
  return (
    <div>
      {client.firstName} {client.lastName}
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  client: selectors.selectDataById(props.clientId)(state)
})

export default connect(mapStateToProps)(Client)
