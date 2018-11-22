import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import User from './User';
import Loading from 'src/commons/components/Loading'
import Success from 'src/commons/components/Success'
import Empty from 'src/commons/components/Empty'
import Error from 'src/commons/components/Error'
import { selectors, types } from '../redux';

const mapState = selectors.selectComplete

const UserList = () => {
  const state = useMappedState(mapState);
  const fetchUser = useFetchUser();

  return (
    <>
      <Success succeeded={state.hasSucceeded}>
        { () => state.list.map(userId => <User userId={userId} key={ userId} />) }
      </Success>
      <Loading isPending={state.isPending} />
      <Error hasFailed={state.hasFailed} />
      <Empty isEmpty={state.isEmpty}>{fetchUser}</Empty>
    </>
  )
}

const useFetchUser = () => {
  const dispatch = useDispatch()
  return () => dispatch({ type: types.FETCH_USER })
}

export default UserList