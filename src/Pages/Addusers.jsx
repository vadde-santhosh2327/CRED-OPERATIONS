import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Addusers() {
    let [values,setValues]=useState({"username":"","email":""})
    let nav=useNavigate()
    let change=(e)=>
    {
        setValues({...values,[e.target.name]:e.target.value})
    }
    function adduser(e)
    {
        e.preventDefault()
        axios.post("http://localhost:2005/users", values)
        .then(()=>{
            nav("/")
        })
    }
  return (
    <div>
        <h1>Add a new user</h1>
        <form action="">
            <input type="text" placeholder='username'
             name="username" 
             onChange={change}
             value={values.username}/><br />
            <input type="email" placeholder='email address' 
            name="email"
            onChange={change}
            value={values.email}/>
            <br />
            <button onClick={adduser}>Adduser</button>
        </form>
    </div>
  )
}


