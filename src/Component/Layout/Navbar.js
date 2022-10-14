import React from "react";
import { Link , NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-light" to="/">Navbar</NavLink>
    
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" exact to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" exact to="/about">About Us</NavLink>
        </li>
        
       
      </ul>
      
    </div>
    <Link className="btn btn-light" to='./users/add' >Add User</Link>
  </div>
</nav>
    );
}
export default Navbar;