
import './App.css'
import Counter from './components/Counter'
import Drinks from './components/Drinks'
import InputValue from './components/inputValue'

function App() {

  return(
    <>
      <div className='app'>
          <h2> react condition </h2>
          <Counter/>
          <InputValue/>
          <Drinks/>
      </div>
    </>
  )
}

export default App
