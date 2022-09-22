import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/User';

export default function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  console.log(users);
  dispatch(getUsers());

  return (
    <>
      {users.value.map((user) => (
        <p key={user.id}>
          user name
          {' '}
          {user.name}
          {' '}
          id
          {user.id}
          .
        </p>
      ))}

    </>
  );
}
