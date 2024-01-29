import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/views/pages/LoginPage/LoginPage";
import FindPasswordPage from "./components/views/pages/FindPasswordPage/FindPasswordPage";
import MainPage from "./components/views/pages/MainPage/MainPage";
import ProfilePage from "./components/views/pages/ProfilePage/ProfilePage";
<<<<<<< HEAD
import Navbar from "./components/views/Header/Navbar";
import AddModal from "./components/views/pages/Modal/AddModal";
import UpdateModal from "./components/views/pages/Modal/UpdateModal";
import OrderPage from "./components/views/pages/OrderPage/OrderPage";
import OrderAdd from "./components/views/pages/OrderPage/OrderAdd";
import OrderAddDataTable from "./components/views/pages/OrderPage/OrderAddDataTable";
import DataTable from "./components/views/pages/MainPage/DataTable";
import EstimateAdd from "./components/views/pages/EstimatePage/EstimateAdd";
import EstimateAddDataTable from "./components/views/pages/EstimatePage/EstimateAddDataTable";
import SalesAdd from "./components/views/pages/OrderPage/SalesAdd";
import SalesAddDataTable from "./components/views/pages/OrderPage/SalesAddDataTable";
import EstimatePage from "./components/views/pages/EstimatePage/EstimatePage";
import SalesPage from "./components/views/pages/OrderPage/SalesPage";
import AccountPage from "./components/views/pages/AccountPage/AccountPage";
import InvoicePage from "./components/views/pages/InvoicePage/InvoicePage";
import InvoiceAdd from './components/views/pages/InvoicePage/InvoiceAdd';
=======
import ErrorPage from "./components/views/pages/Common/ErrorPage";
>>>>>>> bd91030459c723c4b898865165a09faa3868a030

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="findpassword" element={<FindPasswordPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
<<<<<<< HEAD
          <Route path="/header" element={<Navbar />} />
          <Route path="/AddModal" element={<AddModal />} />
          <Route path="/UpdateModal" element={<UpdateModal />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/OrderAdd" element={<OrderAdd />} />
          <Route path="/OrderAddDataTable" element={<OrderAddDataTable />} />
          <Route path="/DataTable" element={<DataTable />} />
          <Route path="/EstimateAdd" element={<EstimateAdd />} />
          <Route path="/EstimateAddDataTable" element={<EstimateAddDataTable />} />
          <Route path="/EstimatePage" element={<EstimatePage />} />
          <Route path="/SalesAdd" element={<SalesAdd />} />
          <Route path="/SalesAddDataTable" element={<SalesAddDataTable />} />
          <Route path="/SalesPage" element={<SalesPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/InvoicePage" element={<InvoicePage />} />
          <Route path="/InvoiceAdd" element={<InvoiceAdd />} />
=======
          <Route path="/error" element={<ErrorPage />} />
>>>>>>> bd91030459c723c4b898865165a09faa3868a030
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
