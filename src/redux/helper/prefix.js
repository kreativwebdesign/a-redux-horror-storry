const PENDING = 'PENDING'
const SUCCESS = 'SUCCESS'
const FAILED = 'FAILED'

const prefix = (NAMESPACE, PREFIX) => `${NAMESPACE}:${PREFIX}`

export const pending = NAMESPACE =>
  prefix(NAMESPACE, PENDING)

export const succeeded = NAMESPACE =>
  prefix(NAMESPACE, SUCCESS)

export const failed = NAMESPACE =>
  prefix(NAMESPACE, FAILED)