import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import User from './User';
import WithHandledState from 'src/commons/components/WithHandledState'
import { selectors, types } from '../redux';

const mapState = selectors.selectComplete

const UserList = () => {
  const state = useMappedState(mapState);
  const fetchUser = useFetchUser();

  return (
    <WithHandledState state={state} whenEmpty={fetchUser}>
      { () => state.list.map(userId => <User userId={userId} key={ userId} />) }
    </WithHandledState>
  )
}

const useFetchUser = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_USER })
}

export default UserList