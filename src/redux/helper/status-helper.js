import {
  PENDING,
  SUCCESS,
  FAILED,
  REJECTED,
  EMPTY
} from 'src/commons/constants/api'
import suffix from './suffix'

const DELIMITER = ':'

export const pending = NAMESPACE => suffix(NAMESPACE, DELIMITER, PENDING)

export const succeeded = NAMESPACE => suffix(NAMESPACE, DELIMITER, SUCCESS)

export const failed = NAMESPACE => suffix(NAMESPACE, DELIMITER, FAILED)

export const rejected = NAMESPACE => suffix(NAMESPACE, DELIMITER, REJECTED)

const evaluateStatus = status => statusObject => statusObject.status === status
export const isPendingStatus = evaluateStatus(PENDING)
export const isFailedStatus = evaluateStatus(FAILED)
export const isSucceededStatus = evaluateStatus(SUCCESS)
export const isEmptyStatus = evaluateStatus(EMPTY)
