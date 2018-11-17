import React from 'react';

const User = ({ user }) => {
  return (
    <div>
      {user.name.first} {user.name.last}
    </div>
  )
}

export default User