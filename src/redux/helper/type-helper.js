import { FETCH, ADD, DELETE, UPDATE } from 'src/commons/constants/api'
import { PENDING, SUCCESS, FAILED, REJECTED } from 'src/commons/constants/api'
import * as allOperationHelpers from './operation-helper'
import * as allStatusHelpers from './status-helper'

const operationHelpers = {
  FETCH: allOperationHelpers.fetch,
  ADD: allOperationHelpers.add,
  DELETE: allOperationHelpers.del,
  UPDATE: allOperationHelpers.update
}

const statusHelpers = {
  PENDING: allStatusHelpers.pending,
  SUCCESS: allStatusHelpers.succeeded,
  FAILED: allStatusHelpers.failed,
  REJECTED: allStatusHelpers.rejected
}

const createTypes = NAMESPACE => {
  return [FETCH, ADD, DELETE, UPDATE].reduce((types, operation) => {
    const OPERATION_NAMESPACE = operationHelpers[operation](NAMESPACE)
    types[operation] = [PENDING, SUCCESS, FAILED, REJECTED].reduce(
      (states, status) => {
        states[status] = statusHelpers[status](OPERATION_NAMESPACE)
        return states
      },
      {}
    )
    types[operation].DO = OPERATION_NAMESPACE
    return types
  }, {})
}

export default createTypes
