import React, { useState, useRef } from "react";
import "./profile.css";
import { Button, Flex } from 'antd';
import { Space, Typography } from 'antd';
import profile from '../../../../img/profileIcon.png';

function Profiledropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);



  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <img src={profile} alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li>이름 : 홍길동</li>
          <li>직책 : 대리</li>
          <li>부서 : 영업부</li>
          <li>이메일 : abc@erpro.com</li>

          <Flex wrap="wrap" gap="small" style={{ display: 'flex', alignItems: 'center', marginTop: '14px' }}>
            <Button type="primary" success>
              내 정보
            </Button>
            <Button type="primary" danger>
              로그아웃
            </Button>
          </Flex>

        </ul>
      </nav>
    </div>
  );
}

export default Profiledropdown
