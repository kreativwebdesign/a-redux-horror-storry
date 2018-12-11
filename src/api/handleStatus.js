import { SUCCESS, FAILED } from 'src/commons/constants/api'

const handleStatus = (payload) => {
  const status = payload.error ? {
    status: FAILED,
    error: payload.error
  } : {
    status: SUCCESS
  }
  return {
    ...payload,
    meta: {
      ...payload.meta,
      status
    }
  }
}

export default handleStatus