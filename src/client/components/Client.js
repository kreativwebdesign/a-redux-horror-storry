import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { selectors } from '../redux';

const Client = ({ clientId }) => {
  const client = useMappedState(selectors.selectDataById(clientId));

  if (!client) {
    return 'sorry client could not be found'
  }
  return (
    <div>
      {client.firstName} {client.lastName}
    </div>
  )
}

export default Client