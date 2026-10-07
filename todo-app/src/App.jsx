import { useState } from 'react'
import './App.css'

function App(){
  const [todos, setTodos] = useState([
    {id: 1, text: '운동 하기', completed: false},
    {id: 2, text: '영화 보기', completed: false}
  ])
  const [inputValue, setInputValue] = useState("")

  console.log(todos.length);

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  // 할일 추가
  const handleAddTodo = () => {
    if (inputValue.trim() !== ""){

      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        completed: false,
      }

      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // 할일 완료 체크
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.complted} : todo
      )
    )
  }

  // 할일 삭제
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return(
    <>
      <div className='hangw_grow_up'>
         <h2>
            할 일 관리
         </h2>
         <input 
          type="text" 
          value={inputValue}
          onChange={handleInputChange}
          placeholder='할 일을 입력하세여'  
        />
        <button onClick = {handleAddTodo}>추가</button>

        <ul className='todo-list'>
         {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default App;