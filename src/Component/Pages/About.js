import React,{useState} from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from 'uuid'
//import { useNavigate } from "react-router-dom";

const About = (props) => {
    //const navigate = useNavigate();
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

    setInput({ ...input, [name]: value, });
  };

  const SubmitEvent = (e) => {
    e.preventDefault();
    const newRecord = { ...input };

    setSub([...sub, input]);
    console.log('subsub',sub)
    props.setUserData(sub)

    //after inserting value
    setInput({ name: "", amount: "", email: "", address: "", feedback: "" });
  };
  
  const deleteItem = (id) => {
    
    
    const updateValue = sub.filter(item => item.id !== id)
    setSub(updateValue);
  };
  
  const editHandler = (id) => {
    console.log('id', id);
    //navigate=(`/users/${id}`)
  }
  return (
    <div className="container">
      <h1>Add user </h1>
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
                  <Link to={`/edit/${data.id}`}>
                <button onClick={() => editHandler(data.id)} >Edit </button>
                </Link>
                  &nbsp;
                  <button
                    onClick={() => {
                      deleteItem(data.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default About;
