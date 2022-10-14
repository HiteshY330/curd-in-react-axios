import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    let navigate = useNavigate();

   const [users, setUsers] = useState({
    name:"",
    username:'',
    email:'',
    phone:"",
    website:"",
   });

   const InputEvent = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setUsers({...users, [name]:value });
   };

   const onSubmit = async e =>{
    e.preventDefault();
    await axios.post("http://localhost:3001/user",users);
    navigate("/");    

   }
  return (
    <>
      <div class="mt-4  "  style={{width: '50%', margin:'auto', justifyContent: 'space-around'}}>
      <form class='border shadow p-5' onSubmit={onSubmit} >
        <div class="mb-3 " >
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            name='name'
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
            name='username'
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
            name ='email'
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
            name='phone'
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
            name='website'
            onChange={InputEvent}
            class="form-control"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
export default AddUsers;
