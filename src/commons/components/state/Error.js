import React from 'react'

export const DefaultError = () =>
  'An error occurred, please try again later. Sorry about that!'

const Error = ({ hasFailed, children }) => {
  if (hasFailed) {
    return children ? children : <DefaultError />
  }
  return null
}

export default Error
