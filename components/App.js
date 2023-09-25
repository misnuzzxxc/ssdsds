import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import '../css/new.css';
import HeaderAdmin from './Header/Header_admin';
import Footer from './Footer/Footer';
import LoginForm from './LoginForm';
import Signup from './Signup';
import ReactThrottle from './R095_reactThrottle';
import { ImageUpload } from './CombinedComponents';

const App = () => {
  const [name, setName] = useState('');

  const updateUserName = (newUserName) => {
    setName(newUserName);
  }

  const changeUserName = (newName) => { };
  const changeMode = (newMode) => { };

  return (
    <div className="App">
      <HeaderAdmin userName={name} />
      <Routes>
        <Route path='/' element={<LoginForm updateUserName={updateUserName} />} />
        <Route path='/UserApproval' element={<ReactThrottle />} />
        <Route path='/Signup' element={<Signup changeUserName={changeUserName} changeMode={changeMode} />} />
        <Route path='/ImageUpload' element={<ImageUpload />} /> {/* 추가: 이미지 업로드 페이지 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
