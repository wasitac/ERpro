/**
 * 이지홍
 */
import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/profile")
      .then((response) => response.text())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div>내 정보 수정 페이지</div>
      <div>{data}</div>
			<ProfileForm></ProfileForm>
    </div>
  );
};

export default ProfilePage;
