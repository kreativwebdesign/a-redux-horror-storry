import { pending, succeeded, failed } from "./prefix";

export const createDataReducer = (NAMESPACE, initialState = {}) => {
  return (state = initialState, { type, payload, error }) => {
    // TO-DO
    switch(type) {
      case succeeded(NAMESPACE + '/FETCH'):
      console.log(type, payload)
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