import './Home.css';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/slices/main/mainSlice'
import TarotMilkTeaLogo from "../../assets/images/TarotMilkTeaLogo.png"


function Home() {
  let navigate = useNavigate()
  const counts = useSelector((state) => state.mainSlice.value)
  const dispatch = useDispatch()
  const [tmpNum, setTmpNum] = useState(0)

  const handleInputChange = (e) => {
    setTmpNum(Number(e.target.value))
  }
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
      {/* 테스트 부분 */}
      <div>
        <input type="number" onChange={handleInputChange} value={tmpNum} />

        <p>표시 숫자: {counts}</p>
        <button onClick={()=>{return dispatch(increment())}}>증가버튼</button>
        <button onClick={()=>{return dispatch(decrement())}}>감소버튼</button>
        <button onClick={()=>{return dispatch(incrementByAmount(tmpNum))}}>숫자증감버튼</button>
      </div>
    </div>
  );
}

export default Home;
