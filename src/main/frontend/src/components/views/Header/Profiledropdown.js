import React, { useState, useRef } from "react";
import "./profile.css";
import { Button, Flex } from "antd";
import profile from "../../../img/profileIcon.png";
import { useNavigate } from "react-router-dom";

function Profiledropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <img src={profile} alt="Member avatar" />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>이름 : {localStorage.getItem("name")}</li>
          <li>직급 : {localStorage.getItem("rank")}</li>
          <li>부서 : {localStorage.getItem("department")}</li>
          <li>이메일 : {localStorage.getItem("email")}</li>

          <Flex
            wrap="wrap"
            gap="small"
            style={{ display: "flex", alignItems: "center", marginTop: "14px" }}
          >
            <Button
              type="primary"
              onClick={handleProfileClick}
              style={{ backgroundColor: "#44883e" }}
            >
              내 정보
            </Button>
            <Button
              type="primary"
              onClick={handleLogoutClick}
              style={{ backgroundColor: "#ffc43e", color: "black" }}
            >
              로그아웃
            </Button>
          </Flex>
        </ul>
      </nav>
    </div>
  );
}

export default Profiledropdown;
