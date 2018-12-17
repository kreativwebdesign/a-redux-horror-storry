import React from 'react'
import { Loader as DefaultLoader } from 'semantic-ui-react'

const Loading = ({ isPending = true, children }) => {
  if (isPending) {
    return children ? children : <DefaultLoader active={isPending} />
  }
  return null
}

export default Loading
