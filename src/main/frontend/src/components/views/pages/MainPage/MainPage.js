/**
 * 이지홍
 */
import React, { useState } from "react";
import TableTabs from "./TableTabs";
import Navbar from "../../Header/Navbar";
const MainPage = () => {
  const [keyOfmenu, setKeyOfmenu] = useState(["main", 1]);
  const handleMenuChange = (changedKeyOfmenu) => {
    setKeyOfmenu(changedKeyOfmenu);
  };

  return (
    <>
      <Navbar onMenuChange={handleMenuChange} />
      <TableTabs keyOfmenu={keyOfmenu} onMenuChange={handleMenuChange}></TableTabs>
    </>
  );
};

export default MainPage;
