import './App.css'
import Student from './Components/Student/Student.Component.tsx'
const coursesList: string [] = ["OS", "Database", "Datastructure", "VHDL"]
function App() {
  return (
    <>
    <h1 className='props'>Props Exercise</h1>
    <Student name = "Lara Samara" age = {22} isGraduated = {true} coursesList={coursesList}/>
    </>
  )
}

export default App
