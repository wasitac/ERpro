/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import TableTabs from "./TableTabs";

const MainPage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/main")
      .then((response) => response.text())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      메인페이지
      <TableTabs menu="메뉴1"></TableTabs>
    </div>
  );
};

export default MainPage;
