import { createSelector, createStructuredSelector } from 'reselect'
import {
  isPendingStatus,
  isSucceededStatus,
  isFailedStatus,
  isEmptyStatus
} from './status-helper'

export const createSelectors = baseSelector => {
  const selectData = createSelector(
    baseSelector,
    state => state.data
  )
  const selectList = createSelector(
    baseSelector,
    state => state.list
  )
  const selectStatus = createSelector(
    baseSelector,
    state => state.meta.status
  )
  const selectError = createSelector(
    selectStatus,
    status => status.error
  )
  const selectOperation = createSelector(
    selectStatus,
    status => status.operation
  )
  const selectDataById = id => data => (data ? data[id] : undefined)

  const hasSucceeded = createSelector(
    selectStatus,
    isSucceededStatus
  )
  const hasFailed = createSelector(
    selectStatus,
    isFailedStatus
  )
  const isPending = createSelector(
    selectStatus,
    isPendingStatus
  )
  const isEmpty = createSelector(
    selectStatus,
    isEmptyStatus
  )

  return {
    selectData,
    selectList,
    selectStatus,
    selectError,
    selectOperation,
    selectDataById: id =>
      createSelector(
        selectData,
        selectDataById(id)
      ),
    selectComplete: createStructuredSelector({
      data: selectData,
      list: selectList,
      isPending,
      hasSucceeded,
      hasFailed,
      isEmpty,
      status: selectStatus,
      error: selectError,
      operation: selectOperation
    })
  }
}

export const createDataSelector = NAMESPACE => state => state.data[NAMESPACE]

export const createTimetableSelector = NAMESPACE => state =>
  state.app.metadata.timetable[NAMESPACE]

export const createTimetableSelectors = NAMESPACE => {
  const baseSelector = state => state.app.metadata.timetable[NAMESPACE]
  const isResourceValid = (id, state) => {
    const timetable = baseSelector(state)
    const currentTimestamp = new Date().getTime()
    const fiveMinutesAgo = currentTimestamp - 5 * 60 * 1000
    return timetable[id].time > fiveMinutesAgo
  }
  return {
    isResourceValid,
    baseSelector
  }
}

export const createControllerSelector = NAMESPACE => state =>
  state.app.metadata.controllers[NAMESPACE]
