
import Main from './pages/Main'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Header from './layouts/header'
import Information from './pages/Information'

function App() {

  return (
    <>
      <section className='app'>
        <BrowserRouter>
          <Header/>

          <div className='content'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/sign_up' element={<SignUp/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Information' element={<Information/>}/>
            </Routes>

          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
