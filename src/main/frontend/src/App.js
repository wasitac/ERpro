import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/views/pages/MainPage/MainPage';
import ProfilePage from './components/views/pages/ProfilePage/ProfilePage';
import Navbar from './components/views/pages/Header/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="header" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
