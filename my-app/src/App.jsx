import './App.css'
import heroImg from './assets/hero.png'
import Dog from './components/Dog';
import Dog2 from './components/Dog2';
import Example01 from './components/Example01';
import Exameple02 from './components/Example02';
import Example03 from './components/Example03';
{/*
  jsx에서는 class 대신 className을 사용해야 한다.
  태그를 병렬로 사용할 수 있다. (div, h2, h3 등)
  데이터의 값(변수)을 jsx에서 사용하려면 {}로 감싸야 한다.
  컴포넌트는 함수 형식으로 만들고 첫글자는 대문자이고 태그처럼 사용한다.
  ex) <MyButon />  <MyButton></MyButton>
  */}

// 내부 컴포넌트 정의  
function MyButton() {
  return (
    <button>list view</button>
  )
}

function App() {
  const season = 'autumn';

  return (
    <div>
      <h2>react starter</h2>
      <h3 className="welcome">homepage welcome</h3>
      <section>
        {/* <p>Now season is {season}.</p> */}
        {/* 이미지 넣기 */ }
        {/* <img src={heroImg} alt="Hero" width="200" /> */}
        <Example01 />
        <br />
        <Exameple02 />
        <Example03 />
        <Dog breed="martiz" age={2}/>
        <Dog2 breed="gyuwon" age={27} />
      </section>
      {/* <MyButton /> */}
    </div>
  )
}

export default App
