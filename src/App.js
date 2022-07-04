import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexHome from './components/IndexHome';
import UserRegistration from './components/UserRegistration';


import AdminLogin from './components/AdminLogin';
import AdminAfterLogin from './components/AdminAfterLogin';


function App() {
  return (
    <div className="App">

      <h3> MY COMPANY NAME </h3>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/registration" element={<UserRegistration />} />
        
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminafterlogin" element={<AdminAfterLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
