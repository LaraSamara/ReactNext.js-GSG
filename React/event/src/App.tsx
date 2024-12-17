import { useState } from 'react'
import './App.css';
import Student from './Components/Student/Student.Component.tsx';
export interface IStudent{
  Id: number;
  Name: string;
  age: number;
  isGraduated: boolean,
  coursesList: string[]
}
const Students:IStudent[]= [
  {
    Id: 1,
    Name: "Lara Samara",
    age: 22,
    isGraduated: true,
    coursesList: ["React", "Asp", "Node"]
  },
  {
    Id: 2,
    Name: "Eva Samara",
    age: 18,
    isGraduated: false,
    coursesList: ["Physics", "Math", "English"]
  },
];
function App() {
  const [StudentList, setStudentList] = useState<Array<IStudent>>(Students);
  const [TotalAbsent, setTotalAbsent] = useState(0);
  const handleAbsentChange =(name: string, change: number)=>{
    console.log(`name is: ${name}, total absent is: ${setTotalAbsent(TotalAbsent + change)}`);
  }
  return (
    <div className='app'>
      <h1>Event Exercise</h1>
      <div className='total'>Total Absent: {TotalAbsent}</div>
      <div className='students'>
      {StudentList.map(student => 
        <Student key={student.Id} Id = {student.Id} Name = {student.Name}
        age = {student.age} isGraduated = {student.isGraduated} coursesList = {student.coursesList} handelTotalAbsent = {handleAbsentChange}/>
      )}
      </div>
    </div>
  )
}

export default App
