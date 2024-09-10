import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  { useParams } from 'react-router-dom'
import "./update_user.css"
import { useNavigate } from 'react-router-dom'

export default function update_user() {

  const {id} = useParams()
  const[name , setName] = useState([])
  const[email , setEmail] = useState([])
  const[password , setPassword] = useState([])
  const navigator = useNavigate()
  
  useEffect(()=>{
    axios.get("http://localhost:4000/getUser/"+id)
  .then((value)=>{
    setName(value.data.name)
    setEmail(value.data.email)
    setPassword(value.data.password)
  })
  },[])
  
  const update = (z) =>{
    z.preventDefault()
    axios.put("http://localhost:4000/Update_user/"+id , {
      name,email,password
    })
   .then((newVal)=>console.log(newVal))
   navigator("/")
  }


  return (
    <div className="form-container">
    <h2>Update User</h2>
    <form  
    onSubmit={update}
    >
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" value={name}
      onChange={(e)=>setName(e.target.value)}
       />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" value={email}
     onChange={(e)=>setEmail(e.target.value)}
       />
      <br />
      <br />

      <label htmlFor="password">Password:</label>
      <br />
      <input type="password" id="password" name="password"  value={password}
    onChange={(e)=>setPassword(e.target.value)}   
      />
      <br />
      <br />
      <button>Update</button>
    </form>
    <br />
    
  </div>
  )
}
