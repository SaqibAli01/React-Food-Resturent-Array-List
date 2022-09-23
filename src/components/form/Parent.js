import React from 'react'
import UserSignup from './UserSignup'
import ListTable from './ListTable'
import { useState } from 'react';

export function Parent() {
  let [users, setUsers] = useState([]);

// abc ka matlib ha prop

  return <>
    <div>Parent</div>
    <UserSignup users = {users} abc = {setUsers}> </UserSignup>
    <ListTable users = {users} setUsers = {setUsers}> </ListTable>
    </>
}
