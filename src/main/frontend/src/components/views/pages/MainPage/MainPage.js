/**
 * 이지홍
 */
import React, { useState } from "react";
import TableTabs from "./TableTabs";
import Navbar from "../../Header/Navbar";
const MainPage = () => {
  const [keyOfmenu, setKeyOfmenu] = useState("account");
  const handleMenuChange = (changedKeyOfmenu) => {
    setKeyOfmenu(changedKeyOfmenu);
  };

  return (
    <>
      <Navbar onMenuChange={handleMenuChange} />
      <TableTabs keyOfmenu={keyOfmenu}></TableTabs>
    </>
  );
};

export default MainPage;
