import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/views/pages/MainPage/MainPage';
import ProfilePage from './components/views/pages/ProfilePage/ProfilePage';
import Navbar from './components/views/pages/Header/Navbar';
import Profiledropdown from './components/views/pages/Header/Profiledropdown';
import AddModal from './components/views/pages/Modal/AddModal';
import UpdateModal from './components/views/pages/Modal/UpdateModal';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="header" element={<Navbar />} />
          <Route path="Profiledropdown" element={<Profiledropdown />} />
          <Route path="AddModal" element={<AddModal />} />
          <Route path="UpdateModal" element={<UpdateModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
