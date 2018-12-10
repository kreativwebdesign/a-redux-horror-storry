import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading'
import Success from './Success'
import Empty from './Empty'
import Error from './Error'

const WithHandledState = ({ state = {}, whenEmpty, children, onError, whileLoading }) => {
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

const mapStateToProps = (state, props) => ({
  state: props.stateSelector(state)
})

export default connect(mapStateToProps, WithHandledState)(WithHandledState)