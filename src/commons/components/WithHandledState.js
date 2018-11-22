import React from 'react'
import Loading from './Loading'
import Success from './Success'
import Empty from './Empty'
import Error from './Error'

const WithHandledState = ({ state, whenEmpty, children }) => {
  return (
    <>
      <Success succeeded={state.hasSucceeded}>
        { children }
      </Success>
      <Loading isPending={state.isPending} />
      <Error hasFailed={state.hasFailed} />
      <Empty isEmpty={state.isEmpty}>{whenEmpty}</Empty>
    </>
  )
}

export default WithHandledState