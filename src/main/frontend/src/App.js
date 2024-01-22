import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/views/pages/MainPage/MainPage';
import ProfilePage from './components/views/pages/ProfilePage/ProfilePage'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="" element={<MainPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
