import './Home.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
// import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import TarotMilkTeaLogo from "../../assets/images/TarotMilkTeaLogo.png"


function Home() {
  let navigate = useNavigate()

  return (
    <div className='MainContainer'>
      {/* 상단 로고 부분 */}
      <div>
        <div>빈공간</div>
        <div>
          <img src={TarotMilkTeaLogo} alt="" width='500px'/>
        </div>
        <div>로그인</div>
      </div>
      {/* 상단 NAV바 */}
      <nav>
        <div>
          <h1>홈</h1>
        </div>
        <div>
          <h1>소개</h1>
        </div>
        <div>
          <h1>카드 설명</h1>
        </div>
        <div>
          <h1>타로밀크티</h1>
        </div>
        <div>
          <h1>게시판</h1>
        </div>
      </nav>
      {/* 메인페이지 부분 */}
      <div></div>
    </div>
  );
}

export default Home;
