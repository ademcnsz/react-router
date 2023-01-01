import React from 'react'
import { Link,  Switch, Route, Routes} from 'react-router-dom';
import { useRouteMatch} from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import User from './User';

function Users() {

  const [users,setUsers]= useState([]);
  const [loading,setLoading]=useState(true);
  let {path,url} =useRouteMatch();
  // const path = "/users"
  // const url = "/users"
  console.log(path,url);
  useEffect(()=>{axios("https://jsonplaceholder.typicode.com/users")
  .then((res)=>setUsers(res.data))
  .finally(()=>setLoading(false))
},[])
  


  return (
    <>
      <h2>Users Page</h2>
    {loading && <div>Loading...</div>}
      <ul>
        {
          users.map((user)=>(
            <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>

      <Routes>
          <Route exact path={path}>
      
          </Route>
          <Route path={`${path}/:id`} element={<User />}>

          </Route>
        </Routes>
    </>
  )
}

export default Users
