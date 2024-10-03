import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
export default function Updateusers() {
    let [values, setValues] = useState({ "username": "", "email": "" })
    let nav = useNavigate()
    let change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    // function adduser(e)
    // {
    //     e.preventDefault()
    //     axios.post("http://localhost:2005/users", values)
    //     .then(()=>{
    //         nav("/")
    //     })
    // }
    let { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:2005/users/" + id)
            .then(res => setValues(res.data))
    }, [])
    function update(e){
        e.preventDefault()
        axios.put("http://localhost:2005/users/" +id, values)
        .then(()=>
        {
            nav("/")
        })

    }
    return (
        <div>
            <h1>Edit ur profile</h1>
            <form action="">
                <input type="text" placeholder='username'
                    name="username"
                    onChange={change}
                    value={values.username} /><br />
                <input type="email" placeholder='email address'
                    name="email"
                    onChange={change}
                    value={values.email} />
                <br />
                <button onClick={update}>Update user</button>
            </form>
        </div>
    )
}


