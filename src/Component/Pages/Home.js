import React, { startTransition, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//  import EditUsers from "../Users/EditUsers";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    {
      /*fetch('http://localhost:3001/user')
        .then(res => res.json())
    .then(data => console.log(data)) 
    
    axios.get('http://localhost:3001/user')
    .then(result => console.log(result.data))
*/
    }
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/user");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:3001/user/${id}`);
    loadUsers();
  }

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             { 
             users.map((user, index)=>(
                <tr>
                    <th scope="row"> {index + 1}</th>
                    <td> {user.name} </td>
                    <td> {user.username} </td>
                    <td> {user.email} </td>
                    <td>
                        <Link className="btn btn-primary m-2" to={`/users/view/${user.id}`} > View</Link>
                        <Link className="btn btn-warning m-2" to={`/users/edit/${user.id}`} > Edit</Link>
                        <Link className="btn btn-danger m-2" onClick={()=>deleteUser(user.id)} > Delete</Link>
                    </td>
                    
                </tr>
             ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;
