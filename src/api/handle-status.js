import { SUCCESS, FAILED } from 'src/api/constants'

const handleStatus = payload => {
  const status = payload.error
    ? {
        status: FAILED,
        error: payload.error
      }
    : {
        status: SUCCESS
      }
  return {
    ...(payload.error ? {} : payload),
    meta: {
      ...payload.meta,
      status
    }
  }
}

export default handleStatus
