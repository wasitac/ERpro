/**
 * 이지홍
 */
import React, { useState } from "react";
import TableTabs from "./TableTabs";
import Navbar from "../../Header/Navbar";
const MainPage = () => {
  const [menu, setMenu] = useState("야");
  const handleMenuChange = (changedMenu) => {
    setMenu(changedMenu);
  };

  return (
    <>
      <Navbar onMenuChange={handleMenuChange} />
      <TableTabs menu={menu}></TableTabs>
    </>
  );
};

export default MainPage;
