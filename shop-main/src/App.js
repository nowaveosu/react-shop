import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post =  '역삼 우동 맛집';
  let titleArr = ['남자코트 추천','강남 우동맛집','파이썬독학']
  let [title,setTitle] = useState(titleArr);
  let [logo, setLogo] = useState('ReactBlog');

return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
        {title.map(el => 
          <div className='list'>
            <h4>{el}</h4>
            <p>2월 17일 발행</p>
          </div>
        )}
    </div>
  );
}

export default App;
