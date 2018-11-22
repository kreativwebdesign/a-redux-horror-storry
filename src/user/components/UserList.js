import React from 'react';
import { useDispatch } from 'redux-react-hook';
import User from './User';
import WithHandledState from 'src/commons/components/WithHandledState'
import { selectors, types } from '../redux';

const UserList = () => {
  const fetchUser = useFetchUser();
  return (
    <WithHandledState selector={selectors.selectComplete} whenEmpty={fetchUser}>
      { (state) => state.list.map(userId => <User userId={userId} key={ userId} />) }
    </WithHandledState>
  )
}

const useFetchUser = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_USER })
}

export default UserList