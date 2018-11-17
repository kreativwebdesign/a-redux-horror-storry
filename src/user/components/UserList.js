import React, { useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook'
import User from './User'
import { FETCH_USER } from '../redux/userSaga'

const mapState = (state) => state && state[0] ? state[0] : undefined

const UserList = () => {
  const user = useMappedState(mapState);
  const dispatch = useDispatch();

  if (user) {
    return <User user={ user} key={ user.id} />
  }
  dispatch({ type: FETCH_USER })
  return 'Loading...'
}

export default UserList