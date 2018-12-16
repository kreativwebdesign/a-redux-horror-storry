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
      ),
    selectPaginatedList: ({ from, to }) => state => selectList(state).slice(from, to)
  }
}

export const createDataSelector = NAMESPACE => state =>
  state.data[NAMESPACE.toLowerCase()]

export const createTimetableSelector = NAMESPACE => state =>
  state.app.metadata.timetable[NAMESPACE]

export const createTimetableSelectors = NAMESPACE => {
  const baseSelector = state =>
    state.app.metadata.timetable[NAMESPACE.toLowerCase()]

  const wasResourceUpdatedFiveMinutesAgo = resource => {
    const fiveMinutes = 5 * 60 * 1000
    const currentTimestamp = new Date().getTime()
    const fiveMinutesAgo = currentTimestamp - fiveMinutes
    return resource > fiveMinutesAgo
  }

  const isResourceValid = resourceId => state => {
    const timetable = baseSelector(state)
    return wasResourceUpdatedFiveMinutesAgo(timetable[resourceId])
  }

  const areResourcesValid = resourceIdList => state => {
    const timetable = baseSelector(state)
    return resourceIdList.every(resourceId => wasResourceUpdatedFiveMinutesAgo(timetable[resourceId]))
  }

  return {
    isResourceValid,
    areResourcesValid,
    baseSelector
  }
}

export const createControllerSelector = NAMESPACE => state =>
  state.app.metadata.controllers[NAMESPACE]

export const createControllerSelectors = (NAMESPACE, controllerName) => {
  const baseSelector = state =>
    state.app.metadata.controllers[NAMESPACE.toLowerCase()][controllerName]
  const isResourceAvailable = resourceId => state => {
    const resourceStatus = baseSelector(state)[resourceId]
    return resourceStatus && isSucceededStatus({ status: resourceStatus })
  }

  const selectStatus = resourceId => state => baseSelector(state)[resourceId]
  return {
    isResourceAvailable,
    selectStatus
  }
}
