import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage  from './components/views/pages/LoginPage/LoginPage';
import FindPasswordPage from './components/views/pages/FindPasswordPage/FindPasswordPage';
import MainPage from "./components/views/pages/MainPage/MainPage";
import ProfilePage from "./components/views/pages/ProfilePage/ProfilePage";
import Navbar from "./components/views/pages/Header/Navbar";
import AddModal from "./components/views/pages/Modal/AddModal";
import UpdateModal from "./components/views/pages/Modal/UpdateModal";
import OrderPage from "./components/views/pages/OrderPage/OrderPage";
import OrderAdd from "./components/views/pages/OrderPage/OrderAdd";
import OrderAddDataTable from "./components/views/pages/OrderPage/OrderAddDataTable";
import DataTable from "./components/views/pages/MainPage/DataTable";
import EstimateAdd from "./components/views/pages/EstimatePage/EstimateAdd";
import AccountPage from "./components/views/pages/AccountPage/AccountPage";
import ErrorPage from "./components/views/pages/Common/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      	<Routes>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="findpassword" element={<FindPasswordPage/>}/>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/header" element={<Navbar />} />
          <Route path="/AddModal" element={<AddModal />} />
          <Route path="/UpdateModal" element={<UpdateModal />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/OrderAdd" element={<OrderAdd />} />
          <Route path="/OrderAddDataTable" element={<OrderAddDataTable />} />
          <Route path="/DataTable" element={<DataTable />} />
          <Route path="/EstimateAdd" element={<EstimateAdd />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
