import {
  PENDING,
  SUCCESS,
  FAILED,
  REJECTED,
  EMPTY,
  RESET
} from 'src/api/constants'
import suffix from './suffix'

const DELIMITER = ':'

export const pending = NAMESPACE => suffix(NAMESPACE, DELIMITER, PENDING)

export const succeeded = NAMESPACE => suffix(NAMESPACE, DELIMITER, SUCCESS)

export const failed = NAMESPACE => suffix(NAMESPACE, DELIMITER, FAILED)

export const rejected = NAMESPACE => suffix(NAMESPACE, DELIMITER, REJECTED)

export const reset = NAMESPACE => suffix(NAMESPACE, DELIMITER, RESET)

const evaluateStatus = status => statusObject => statusObject.status === status
export const isPendingStatus = evaluateStatus(PENDING)
export const isFailedStatus = evaluateStatus(FAILED)
export const isSucceededStatus = evaluateStatus(SUCCESS)
export const isEmptyStatus = evaluateStatus(EMPTY)
