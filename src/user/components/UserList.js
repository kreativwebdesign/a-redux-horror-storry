import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import User from './User';
import { selectors, types } from '../redux';

const mapState = selectors.selectList

const UserList = () => {
  const userList = useMappedState(mapState);
  const fetchUser = useFetchUser();

  if (userList) {
    return userList.map(userId => <User userId={userId} key={ userId} />)
  }
  fetchUser()
  return 'Loading...'
}

const useFetchUser = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_USER })
}

export default UserList