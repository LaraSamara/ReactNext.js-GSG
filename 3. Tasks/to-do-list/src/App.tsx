import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import Form from './Components/Form/Form.tsx'
import Data from './Components/Data/Data.tsx'
import List from './Components/List/List.tsx'
import { IItem } from './assets/Type.tsx'
import reducer from './hooks/reducer.ts'

function App() {
  // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const[date, setDate] = useState<string>('');
  const stopRef = useRef<number>();
  const[state, dispatch] = useReducer(reducer, {todos: [], name: "Lara"});
  const addTask = (task: IItem) => {
    dispatch({type: 'ADD_TASK',payload: task});
  }
  const deleteTask = (id: number) => {
    dispatch({type: 'REMOVE-TASK',payload: id});
  }
  const completeTask = (id: number) =>{
    dispatch({type: 'COMPLETE_TASK',payload: id});
  }
  useEffect(() => {
    stopRef.current = setInterval(()=> {
      setDate(new Date().toLocaleTimeString()); 
    } ,1000);
  },[]); 
  const stopDate = () => {
    if(stopRef.current){
      clearInterval(stopRef.current);
    }
  }
  return (
    <div className='main'>
      <div className='date'>{date}</div>
      <button onClick={stopDate}>Stop Date</button>
    <Form handleAdd = {addTask}/>
    <Data tasks ={state.todos}/>
    <List tasks ={state.todos} handleDelete = {deleteTask} handleComplete = {completeTask}/>
    </div>
  )
}

export default App
