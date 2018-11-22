import { PENDING, SUCCESS, FAILED, REJECTED } from 'src/commons/constants/apiStates'
import suffix from './suffix'

const DELIMITER = ':'

export const pending = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, PENDING)

export const succeeded = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, SUCCESS)

  export const failed = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, FAILED)

export const rejected = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, REJECTED)