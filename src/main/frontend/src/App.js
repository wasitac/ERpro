import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/views/commons/Applayout";
import LoginPage from "./components/views/pages/LoginPage/LoginPage";
import FindPasswordPage from "./components/views/pages/FindPasswordPage/FindPasswordPage";
import MainPage from "./components/views/pages/MainPage/MainPage";
import ProfilePage from "./components/views/pages/ProfilePage/ProfilePage";
import ErrorPage from "./components/views/pages/Common/ErrorPage";
import Hotjar from "./modules/Hotjar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/findpassword" element={<FindPasswordPage />} />
          <Route
            path="/"
            element={
              <Applayout>
                <MainPage />
              </Applayout>
            }
          />
          <Route
            path="/profile"
            element={
              <Applayout>
                <ProfilePage />
              </Applayout>
            }
          />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Hotjar />
    </div>
  );
}

export default App;
