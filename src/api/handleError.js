import { FAILED } from 'src/commons/constants/api'

const handleError = (err, payload) => {
  return {
    ...payload,
    meta: {
      ...(payload ? payload.meta : undefined),
      status: {
        status: FAILED,
        error: err
      }
    }
  }
}

export default handleError