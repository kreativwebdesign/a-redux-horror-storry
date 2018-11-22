import React from 'react'
import Loading from './Loading'
import Success from './Success'
import Empty from './Empty'
import Error from './Error'

const WithHandledState = ({ state, whenEmpty, children, onError, whileLoading }) => {
  return (
    <>
      <Success succeeded={state.hasSucceeded}>
        { children }
      </Success>
      <Loading isPending={state.isPending}>{whileLoading}</Loading>
      <Error hasFailed={state.hasFailed}>{onError}</Error>
      <Empty isEmpty={state.isEmpty}>{whenEmpty}</Empty>
    </>
  )
}

export default WithHandledState