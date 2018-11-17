// import { pending, succeeded, failed } from "./helper/prefix";

export default (state = {}, action) => {
  return {
    ...state,
    ...action.data
  }
}

const dataActions = [
  'FETCH',
  'ADD',
  'REMOVE',
  'UPDATE'
]

export const cerateDataReducer = (NAMESPACE, initialState = {}) => {
  return (state = initialState, { type, data, error }) => {
    // TO-DO
  }
}