import {
  FETCH,
  ADD,
  DELETE,
  UPDATE,
  PENDING,
  SUCCESS,
  FAILED,
  REJECTED,
  RESET
} from 'src/api/constants'
import * as allOperationHelpers from './operation-helper'
import * as allStatusHelpers from './status-helper'

const operationHelpers = {
  FETCH: allOperationHelpers.fetch,
  FETCH_SINGLE: allOperationHelpers.fetch,
  ADD: allOperationHelpers.add,
  DELETE: allOperationHelpers.del,
  UPDATE: allOperationHelpers.update
}

const statusHelpers = {
  PENDING: allStatusHelpers.pending,
  SUCCESS: allStatusHelpers.succeeded,
  FAILED: allStatusHelpers.failed,
  REJECTED: allStatusHelpers.rejected,
  RESET: allStatusHelpers.reset
}

const createOperationTypes = OPERATION_NAMESPACE => {
  return [PENDING, SUCCESS, FAILED, REJECTED, RESET].reduce(
    (states, status) => {
      states[status] = statusHelpers[status](OPERATION_NAMESPACE)
      return states
    },
    {}
  )
}

const createTypes = (NAMESPACE, SINGLE_NAMESPACE) => {
  const fetchSingleOperationNamespace = operationHelpers.FETCH_SINGLE(
    SINGLE_NAMESPACE
  )

  const types = {
    FETCH_SINGLE: {
      ...createOperationTypes(fetchSingleOperationNamespace),
      DO: fetchSingleOperationNamespace
    }
  }
  return [FETCH, ADD, DELETE, UPDATE].reduce((types, operation) => {
    const OPERATION_NAMESPACE = operationHelpers[operation](NAMESPACE)
    types[operation] = createOperationTypes(OPERATION_NAMESPACE)
    types[operation].DO = OPERATION_NAMESPACE
    return types
  }, types)
}

export default createTypes
