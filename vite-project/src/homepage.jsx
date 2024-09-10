import React, { useState, useEffect } from "react";
import "./homepage.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function homepage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => setUsers(res.data));
  }, []);
  console.log(users);

  const userDelete = (z) => {
    axios.delete("http://localhost:4000/delete/" + z).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <section className="homepage">
        <h1>All Users Details</h1>
        
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((value) => {
                console.log(value.name);
                return (
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>
                      <NavLink to={`/update/${value._id}`}>
                        <button className="editbtn"> Edit</button>
                      </NavLink>

                      <button
                        className="deletebtn"
                        onClick={() => {
                          userDelete(value._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <NavLink to="/newuser">
          <button className="adduserbtn">Add New User</button>
        </NavLink>
      </section>
    </>
  );
}

export default homepage;
