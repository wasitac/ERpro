/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import TableTabs from "./TableTabs";

const MainPage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/home")
      .then((response) => response.text())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      메인페이지
      <TableTabs menu={data}></TableTabs>
    </div>
  );
};

export default MainPage;
