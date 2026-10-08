
import Main from './pages/Main'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {

  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <div className='header'>
            <Link to ="/">Home</Link>
            <Link to ="/sign_up">회원가입</Link>
            <Link to ="/login">로그인</Link>
          </div>

          <div className='content'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/sign_up' element={<SignUp/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>

          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
