import React, {useState, useEffect} from 'react';

const MainPage = ()=>{
  const [message, setMessage] = useState("");
useEffect(() => {
fetch('/main')
.then(response => response.text())
.then(message => {
setMessage(message);
});
},[])

  return (
    <div>
      메인페이지
    </div>
  );
}

export default MainPage;