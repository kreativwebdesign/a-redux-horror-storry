import { pending, succeeded, failed } from "./statusHelper";
import { fetch, add } from './operationHelper'
import { PENDING, EMPTY } from 'src/commons/constants/api'

const initState = {
  meta: {
    status: {
      status: EMPTY
    }
  }
}

export const createDataReducer = (NAMESPACE, initialState = initState) => {
  return (state = initialState, { type, payload, error }) => {
    // TO-DO
    switch(type) {
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
      return {
        ...state,
        ...payload
      }
      case succeeded(fetch(NAMESPACE)):
      case succeeded(add(NAMESPACE)):
        return {
          meta: { ...state.meta, ...payload.meta },
          data: { ...state.data, ...payload.data },
          list: [...(new Set([ ...(state.list || []), ...payload.list ])) ],
        }
      default:
        return state;
    }
  }
}