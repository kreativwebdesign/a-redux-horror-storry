import { createSelector, createStructuredSelector } from 'reselect'
import {
  isPendingStatus,
  isSucceededStatus,
  isFailedStatus,
  isEmptyStatus
} from './status-helper'

export const createDataSelectors = NAMESPACE => {
  const baseSelector = state => state.data[NAMESPACE.toLowerCase()]
  const selectData = createSelector(
    baseSelector,
    state => state.data
  )
  const selectList = createSelector(
    baseSelector,
    state => state.list
  )
  const selectDataById = id => data => (data ? data[id] : undefined)

  return {
    selectData,
    selectList,
    selectDataById: id =>
      createSelector(
        selectData,
        selectDataById(id)
      )
  }
}

export const createDataSelector = NAMESPACE => state =>
  state.data[NAMESPACE.toLowerCase()]

export const createTimetableSelector = NAMESPACE => state =>
  state.app.metadata.timetable[NAMESPACE]

export const createTimetableSelectors = NAMESPACE => {
  const baseSelector = state =>
    state.app.metadata.timetable[NAMESPACE.toLowerCase()]
  const isResourceValid = id => state => {
    const timetable = baseSelector(state)
    const currentTimestamp = new Date().getTime()
    const fiveMinutesAgo = currentTimestamp - 5 * 60 * 1000
    return timetable[id] > fiveMinutesAgo
  }
  return {
    isResourceValid,
    baseSelector
  }
}

export const createControllerSelector = NAMESPACE => state =>
  state.app.metadata.controllers[NAMESPACE]

export const createControllerSelectors = (NAMESPACE, controllerName) => {
  const baseSelector = state =>
    state.app.metadata.controllers[NAMESPACE.toLowerCase()][controllerName]
  const isResourceAvailable = id => state => {
    const resourceStatus = baseSelector(state)[id]
    return resourceStatus && isSucceededStatus({ status: resourceStatus })
  }

  const selectStatus = id => state => baseSelector(state)[id]
  return {
    isResourceAvailable,
    selectStatus
  }
}
