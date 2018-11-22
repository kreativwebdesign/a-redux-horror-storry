import React from 'react';
import { useMappedState } from 'redux-react-hook';
import Loading from './Loading'
import Success from './Success'
import Empty from './Empty'
import Error from './Error'

const WithHandledState = ({ selector, whenEmpty, children, onError, whileLoading }) => {
  const state = useMappedState(selector)
  return (
    <>
      <Success succeeded={state.hasSucceeded}>
        { () => children(state) }
      </Success>
      <Loading isPending={state.isPending}>{whileLoading}</Loading>
      <Error hasFailed={state.hasFailed}>{onError}</Error>
      <Empty isEmpty={state.isEmpty}>{whenEmpty}</Empty>
    </>
  )
}

export default WithHandledState