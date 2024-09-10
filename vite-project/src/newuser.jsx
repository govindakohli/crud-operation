import { useState } from "react";
import "./newuser.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function newuser() {

    const[name , setName]=useState()
    const[email , setEmail]=useState()
    const[password , setPassword]=useState()
    const navigator = useNavigate()

    const submit = (s)=>{
      s.preventDefault()
      axios.post("http://localhost:4000/create-newuser" , {name  , email , password})
      .then((a)=>{console.log(a)})
      .catch((error)=>{console.log(error)})
      navigator("/")
    }
  return (
    <>
      <div className="form-container">
        <h2>New User</h2>
        <form  onSubmit={submit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <br />
          <button>Submit</button>
        </form>
        <br />
        
      </div>
    </>
  );
}

export default newuser;
