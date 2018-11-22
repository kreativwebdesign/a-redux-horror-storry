import React from 'react';

export const DefaultLoader = () => 'Loading...';

const Loading = ({ isPending, children }) => {
  if (isPending) {
    return children ? children : <DefaultLoader />;
  }
  return null;
}

export default Loading;