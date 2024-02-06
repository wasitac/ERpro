import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Applayout({children}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  if(token) return <>{children}</>
}

export default Applayout;