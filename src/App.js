import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Navbar from './Component/Layout/Navbar';
import NotFound from './Component/Pages/NotFound';
import AddUsers from './Component/Users/AddUsers';
import EditUsers from './Component/Users/EditUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Component/Users/Users';
import AboutEdit from './Component/Users/AboutEdit';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([])
  return (
    <Router>
    <Navbar/>
      <Routes>
          <Route exact  path="/" element={<Home/>} />
          <Route  path="/about" element={<About setUserData={setUserData}/>} />
          <Route  path="/contact" element={<Contact />} />
          <Route exact  path="/users/add" element={<AddUsers />} />
          <Route exact  path="/users/edit/:id" element={<EditUsers />} />
          <Route exact  path="/users/view/:id" element={<Users />} />
          <Route exact  path="/users/aboutedit/:id" element={<AboutEdit userData={userData}/>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App;
