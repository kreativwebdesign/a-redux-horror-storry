import { FETCH } from 'src/commons/constants/api'

const addOperationHelper = operation => payload => ({
  ...payload,
  meta: {
    ...payload.meta,
    status: {
      ...payload.meta.status,
      operation: operation
    }
  }
})

export const setFetchOperation = addOperationHelper(FETCH)

export default addOperationHelper