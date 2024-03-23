// App.jsx

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Calendar from './components/Calendar';
import ContactForm from './components/contactus';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
