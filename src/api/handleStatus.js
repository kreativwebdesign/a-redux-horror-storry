import { SUCCESS } from 'src/commons/constants/api'

const handleStatus = (payload) => {
  return {
    ...payload,
    meta: {
      ...payload.meta,
      status: {
        status: SUCCESS
      }
    }
  }
}

export default handleStatus