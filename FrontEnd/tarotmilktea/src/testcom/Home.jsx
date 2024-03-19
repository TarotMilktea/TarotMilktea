import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate()

  return (
    <div>
      <h1>이것은 Home</h1>
      <Link to={"/abc"}>abc페이지로 이동</Link>
      <h2 onClick={()=>{navigate('/abc')}}>CAKE페이지로 이동</h2>
      <h3 onClick={()=>{navigate(-1)}}>뒤로 1페이지 이동</h3>
      <h3 onClick={()=>{navigate(1)}}>앞으로 1페이지 이동</h3>
    </div>
  );
}

export default Home;
