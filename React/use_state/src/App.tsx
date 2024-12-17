import { useState } from "react"
import Student from "./Components/Student.Component.tsx";
import "./App.css";
export interface IStudent {
  Id: number;
  name: string;
  age: number;
  isGraduated: boolean;
  CouresesList: string[];
}
const Studens: Array<IStudent> = [
  {
    Id: 10,
    name: "Lara",
    age : 22,
    isGraduated: true,
    CouresesList: ["React", "Asp", "Node"]
  },
  {
    Id: 20,
    name: "eva",
    age : 18,
    isGraduated: false,
    CouresesList: ["Math", "Physics", "English"]
  },
];
function App() {
  const [StudentList, SetStudentList] = useState<Array<IStudent>>(Studens);
  return (
    <div className="app">
          <h1>Use State Exercise</h1>
    <div className="students">
      {StudentList.map(
        student => 
          <Student key={student.Id} Id={student.Id} name={student.name} age={student.age} isGraduated={student.isGraduated} CouresesList={student.CouresesList}/>
      )}
    </div>
    </div>
  )
}

export default App
