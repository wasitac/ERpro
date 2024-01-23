/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import axios from "axios";

const ProfilePage = () => {
  const [data, setData] = useState({
    name: "",
    id: "",
    birth: "",
    phone: "",
    email: "",
    department: "",
    position: "",
    insertDate: "",
  });
  axios.get("/profile").then((response) => setData(response.data));

  return (
    <div>
      <div>내 정보 수정 페이지</div>
      <ProfileForm data={data}></ProfileForm>
    </div>
  );
};

export default ProfilePage;
