import React from 'react'

const Loading = ({ isEmpty, children }) => {
  if (isEmpty) {
    children()
  }
  return null
}

export default Loading
