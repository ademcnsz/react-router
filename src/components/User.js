import React from 'react'
import { json, useParams ,Link} from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';

function User() {
  const {id} = useParams();
  const [user,setUser] = useState({});
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((data)=>{setUser(data)})
    .finally(()=>setLoading(false))
  },[id])

  return (
    <>
      <h2>User Detail</h2>
      {loading && <div>Loading...</div>}
      <code>
        {JSON.stringify(user)}
      </code>
      <br></br><br></br><br></br>
      <Link to={`/user/${parseInt(id)+1}`}>
         Next User ({parseInt(id)+1})
         </Link>
    </>
  )
}

export default User
