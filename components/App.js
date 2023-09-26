import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/new.css';
import { Routes, Route } from 'react-router-dom';
import HeaderAdmin from './Header/Header_admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import Signup from './Signup';
import ReactThrottle from './R095_reactThrottle';




function App() {
  const [name, setName] = useState('');

  const updateUserName = (newUserName) => {
    setName(newUserName);
  };

  return (
    <div className="App">
      <HeaderAdmin /> 
      <Routes>
        <Route path='/' element={<LoginForm updateUserName={updateUserName} />} />
        <Route path='/UserApproval' element={<ReactThrottle />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
