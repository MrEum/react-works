
import './App.css'
import Clock from './components/Clock'
import Counter from './components/Counter'
import Drinks from './components/Drinks'
import InputValue from './components/inputValue'
import User from './components/User'
import Login from './users/Login'
import SignUp from './users/SignUp'

function App() {

  return(
    <>
      <div className='app'>
          {/* <h2> react condition </h2>
          <Counter/>
          <InputValue/>
          <Drinks/> */}
          {/* <Clock/>
          <User/> */}
          {/* <SignUp/> */}
          <Login/>
      </div>
    </>
  )
}

export default App
