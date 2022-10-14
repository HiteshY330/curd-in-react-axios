import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
const Users = () => {
  const {id} = useParams();

  useEffect(()=>{
    loadUser();
  },[])

  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website} = users

  const loadUser = async () =>{
    const result = await axios.get(`http://localhost:3001/user/${id}`);
    setUsers(result.data);
  }
  return (
    <>
      <div
        class="mt-4  "
        style={{ width: "50%", margin: "auto", justifyContent: "space-around" }}
      ><h2 className="text-center mb-4"> User Info </h2>
        <div class="border shadow p-5">
          <div class="mb-3 ">
            
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              
              value={name}
              class="form-control "
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              UserName
            </label>
            <input
              type="text"
              value={username}
              name="username"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Website
            </label>
            <input
              type="text"
              name="website"
              value={website}
              class="form-control"
            />
          </div>
          <Link to='/' className="btn btn-primary">Back</Link>
        </div>

      </div>
    </>
  );
};
export default Users;
