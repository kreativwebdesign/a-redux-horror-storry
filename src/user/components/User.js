import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { selectors } from '../redux';

const User = ({ userId }) => {
  const user = useMappedState(selectors.selectDataById(userId));

  if (!user) {
    return 'sorry user could not be found'
  }
  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  )
}

export default User