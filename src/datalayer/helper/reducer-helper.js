import { pending, succeeded, failed } from './status-helper'
import { fetch, add } from './operation-helper'
import { PENDING, EMPTY, SUCCESS, FAILED } from 'src/commons/constants/api'

const initialDataState = {
  meta: {
    status: {
      status: EMPTY
    }
  }
}

export const createDataReducer = (
  NAMESPACE,
  SINGLE_NAMESPACE,
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
    case succeeded(fetch(SINGLE_NAMESPACE)):
      return {
        meta: { ...state.meta, ...payload.meta },
        data: { ...state.data, ...payload.data },
        list: [...new Set([...(state.list || []), ...payload.list])]
      }
    case succeeded(fetch(SINGLE_NAMESPACE)):
    default:
      return state
  }
}

const initialTimetableState = {}

export const createTimetableReducer = (
  NAMESPACE,
  SINGLE_NAMESPACE,
  initialState = initialTimetableState
) => (state = initialState, { type, payload }) => {
  switch (type) {
    case succeeded(fetch(NAMESPACE)):
    case succeeded(fetch(SINGLE_NAMESPACE)):
    case succeeded(add(NAMESPACE)): {
      const timestamp = new Date().getTime()
      return payload.list.reduce(
        (state, id) => {
          state[id] = timestamp
          return state
        },
        { ...state }
      )
    }
    default:
      return state
  }
}

const setStatus = (STATUS, list, state) =>
  list.reduce(
    (state, id) => {
      state[id] = STATUS
      return state
    },
    { ...state }
  )

const setPending = (list, state) => setStatus(PENDING, list, state)
const setSuccess = (list, state) => setStatus(SUCCESS, list, state)
const setFailed = (list, state) => setStatus(FAILED, list, state)

const initialFetchSingleCtrlState = {}

export const createFetchSingleCtrlReducer = (
  NAMESPACE,
  SINGLE_NAMESPACE,
  initialState = initialFetchSingleCtrlState
) => (state = initialState, { type, payload }) => {
  switch (type) {
    case pending(fetch(SINGLE_NAMESPACE)): {
      return setPending([payload.id], state)
    }
    case succeeded(fetch(NAMESPACE)):
    case succeeded(fetch(SINGLE_NAMESPACE)): {
      return setSuccess(payload.list, state)
    }
    case failed(fetch(SINGLE_NAMESPACE)): {
      return setFailed([payload.id], state)
    }
    default:
      return state
  }
}

const initialFetchPaginatedCtrlState = {}

export const createFetchPaginatedCtrlReducer = (
  NAMESPACE,
  initialState = initialFetchPaginatedCtrlState
) => (state = initialState, { type, payload }) => {
  switch (type) {
    case pending(fetch(NAMESPACE)): {
      return setPending([payload.requestName], state)
    }
    case succeeded(fetch(NAMESPACE)): {
      return setSuccess([payload.requestName], state)
    }
    case failed(fetch(NAMESPACE)): {
      return setFailed([payload.id], state)
    }
    default:
      return state
  }
}

const initialAddCtrlState = {}

export const createAddCtrlReducer = (
  NAMESPACE,
  initialState = initialAddCtrlState
) => (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case pending(add(NAMESPACE)): {
      return {
        [payload.id || 'new']: PENDING
      }
    }
    case succeeded(add(NAMESPACE)): {
      return {
        [payload.list[0] || 'new']: SUCCESS
      }
    }
    case failed(add(NAMESPACE)): {
      return {
        [payload.id || 'new']: FAILED
      }
    }
    default:
      return state
  }
}
