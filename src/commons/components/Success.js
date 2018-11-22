import React from 'react';

const Success = ({ succeeded, children }) => {
  if (succeeded) {
    return children();
  }
  return null;
}

export default Success