/* eslint-disable */ 
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목,글제목변경] = useState(['독감','강남 우동맛집','파이썬독학']);
  let [따봉,따봉변경] = useState(0);
// Component 만드는법
// 1. function만들고(다른 컴포넌트 밖에 만들어야함)
// 2. return()안에 html담기
// 3. <함수명></함수명> 쓰기 <함수명 />도 가능

//어떤걸 컴포넌트로 만들면 좋은가
//0. const Modal = () => {return ~} 로 만들어도 됨
//1. 반복적인 html 축약할 때
//2. 큰 페이지 하나를 컴포넌트화 할때 
//3. 자주변경되는 ui같은것
return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button>가나다순정렬</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}
// 굳이 html을 병렬기입하려면 <> </>으로 div를 병렬로 둘수있음
// 컴포넌트화하는게 단점은 있음
// App()에서 선언한 state를 Modal()에선 못씀
// 너무 복잡하다 싶은것만 컴포넌트화하도록 하자
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
