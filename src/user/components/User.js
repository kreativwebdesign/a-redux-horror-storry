import React from 'react';
import { useMappedState } from 'redux-react-hook';
import { selectors } from '../redux';

const User = ({ userId }) => {
  const user = useMappedState(selectors.selectDataById(userId));
  // const user2 = useMappedState(selectors.selectDataById(userId));

  if (!user) {
    return 'sorry user could not be found'
  }
  return (
    <div>
      {user.name.first} {user.name.last}
    </div>
  )
}

export default User