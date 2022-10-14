import React,{useState} from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid'

const AboutEdit = (props) => {
 // console.log('userData',props.userData)
    
  const [sub, setSub] = useState([]);
  const _id = uuid();
  const [input, setInput] = useState({
    id: _id,
    name: "",
    amount: "",
    email: "",
    address: "",
    feedback: "",
  });



  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const SubmitEvent = (e) => {
    e.preventDefault();
    /*const newRecord = { ...input };*/

    setSub([...sub, input]);

    //after inserting value
    //setInput({ name: "", amount: "", email: "", address: "", feedback: "" });
  };

  const loadData = () =>{

  }

  return (
    <div className="container">
      <h1>update user </h1>
      <form onSubmit={SubmitEvent}>
        <div class="input-group mb-3">
          <input
          class="m-2"
          
            type="text"
            value={input.name}
            name="name"
            onChange={InputEvent}
          />

          <input
          class="m-2"
            type="number"
            value={input.amount}
            name="amount"
            onChange={InputEvent}
          />

          <input
          class="m-2"
            type="email"
            value={input.email}
            name="email"
            onChange={InputEvent}
          />

          <input
          class="m-2"
            type="text"
            value={input.address}
            name="address"
            onChange={InputEvent}
          />

          <input
          class="m-2"
            type="text"
            value={input.feedback}
            name="feedback"
            onChange={InputEvent}
          />
          <input
          class="m-2" type="submit" />
        </div>
        
      </form>
      <div className="py-4">
        <table
          class="table border shadow"
        >
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Feedback</th>
              <th scope="col">Action</th>
            </tr>
            {sub.map((data) => (
              <tr>
                <td> {data.name} </td>
                <td> {data.amount} </td>
                <td> {data.email} </td>
                <td> {data.address} </td>
                <td> {data.feedback} </td>
                <td>
                  <Link to={`/users/aboutedit/${data.id}`}>Edit </Link>
                  &nbsp;
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AboutEdit;
