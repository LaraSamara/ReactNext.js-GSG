import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form.tsx'
import Data from './Components/Data/Data.tsx'
import List from './Components/List/List.tsx'
import { IItem } from './assets/Type.tsx'

function App() {
  const [Tasks, SetTasks] = useState<IItem[]>([])
  const addTask = (task: IItem) => {
    SetTasks([...Tasks,task])
  }
  const deleteTask = (id: number) => {
    const newTask = Tasks.filter(task => task.Id != id);
    SetTasks([...newTask]);
  }
  const completeTask = (id: number) =>{
    const newTask = Tasks.map(task => task.Id == id?{...task, IsComplete: !task.IsComplete}:task);
    SetTasks([...newTask]);
  }
  const date = new Date(); // Get current date

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formattedDate = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  return (
    <div className='main'>
      <div className='date'>{formattedDate}</div>
    <Form handleAdd = {addTask}/>
    <Data tasks ={Tasks}/>
    <List tasks ={Tasks} handleDelete = {deleteTask} handleComplete = {completeTask}/>
    </div>
  )
}

export default App
