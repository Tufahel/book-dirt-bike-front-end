import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

export default function Users() {
  const users = useSelector((state) => state.UsersReducer);

  return (
    <>
      <User
        key={users.value[0].id}
        id={users.value[0].id}
        name={users.vaule[0].username}
      />
    </>
  );
}
