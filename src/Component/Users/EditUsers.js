import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditUsers = () => {
  let navigate = useNavigate();
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

  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUsers({ ...users, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/user/${id}`, users);
    navigate("/");
  };

  const loadUser = async () =>{
    const result = await axios.get(`http://localhost:3001/user/${id}`);
    setUsers(result.data);
  }
  return (
    <>
      <div
        class="mt-4  "
        style={{ width: "50%", margin: "auto", justifyContent: "space-around" }}
      ><h2 className="text-center mb-4"> Edit User</h2>
        <form class="border shadow p-5" onSubmit={onSubmit}>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={InputEvent}
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
              onChange={InputEvent}
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
              onChange={InputEvent}
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
              onChange={InputEvent}
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
              onChange={InputEvent}
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
export default EditUsers;
