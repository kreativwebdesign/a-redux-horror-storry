import React from 'react';
import { useDispatch } from 'redux-react-hook';
import User from './User';
import WithHandledState from 'src/commons/components/state/WithHandledState'
import { selectors, types } from '../redux';

const UserList = () => {
  const fetchUser = useFetchUser();
  return (
    <WithHandledState stateSelector={selectors.selectComplete} whenEmpty={fetchUser}>
      { (state) => state.list.map(userId => <User userId={userId} key={ userId} />) }
    </WithHandledState>
  )
}

const useFetchUser = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_USER })
}


UserList.displayName = 'Users'
UserList.url = '/users'

export default UserList