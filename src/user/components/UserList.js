import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import User from './User';
import { selectors, types } from '../redux';

const mapState = selectors.selectList

const UserList = () => {
  const userList = useMappedState(mapState);
  const dispatch = useDispatch();

  if (userList) {
    return userList.map(userId => <User userId={userId} key={ userId} />)
  }
  dispatch({ type: types.FETCH_USER })
  return 'Loading...'
}

export default UserList