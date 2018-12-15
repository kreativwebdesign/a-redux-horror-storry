import { pending, succeeded, failed } from './status-helper'
import { fetch, add } from './operation-helper'
import { PENDING, EMPTY } from 'src/commons/constants/api'

const initialDataState = {
  meta: {
    status: {
      status: EMPTY
    }
  }
}

export const createDataReducer = (
  NAMESPACE,
  initialState = initialDataState
) => (state = initialState, { type, payload, error }) => {
  // TO-DO
  switch (type) {
    case pending(fetch(NAMESPACE)):
    case pending(add(NAMESPACE)):
      return {
        ...state,
        meta: {
          ...state.meta,
          status: {
            status: PENDING
          }
        }
      }
    case failed(fetch(NAMESPACE)):
    case failed(add(NAMESPACE)):
      return {
        ...state,
        ...payload
      }
    case succeeded(fetch(NAMESPACE)):
    case succeeded(add(NAMESPACE)):
      return {
        meta: { ...state.meta, ...payload.meta },
        data: { ...state.data, ...payload.data },
        list: [...new Set([...(state.list || []), ...payload.list])]
      }
    default:
      return state
  }
}

const initialTimetableState = {}

export const createTimetableReducer = (
  NAMESPACE,
  initialState = initialTimetableState
) => (state = initialState, { type, payload }) => {
  switch (type) {
    case succeeded(fetch(NAMESPACE)):
    case succeeded(add(NAMESPACE)): {
      const timestamp = new Date().getTime()
      const newState = payload.list.reduce((state, id) => {
        state[id] = timestamp
        return state
      }, {})
      return { ...state, ...newState }
    }
    default:
      return state
  }
}
