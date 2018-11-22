import { pending, succeeded, failed } from "./statusHelper";
import { fetch } from './operationHelper'
import { PENDING } from 'src/commons/constants/apiStates'

export const createDataReducer = (NAMESPACE, initialState = {}) => {
  return (state = initialState, { type, payload, error }) => {
    // TO-DO
    switch(type) {
      case pending(fetch(NAMESPACE)):
      return {
        ...state,
        meta: {
          ...state.meta,
          status: {
            status: PENDING
          }
        }
      }
      case succeeded(fetch(NAMESPACE)):
        return {
          meta: { ...state.meta, ...payload.meta },
          data: { ...state.data, ...payload.data },
          list: [ ...(state.list || []), ...payload.list ],
        }
      default:
        return state;
    }
  }
}