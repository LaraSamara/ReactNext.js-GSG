import { useEffect, useRef, useState } from 'react';
import './App.css';
import { IStudent } from './Utils/Type.ts';
import Student from './Components/Student/Student.tsx';
import AddStudent from './Components/AddStudent/AddStudent.tsx';
import { useLocalStorage } from './hooks/localStorage.hook.ts';
function App() {
  const[studentsList, setStudentsList] = useState<IStudent[]>([]);
  const[totalAbsent, setTotalAbsent ] = useState<number>(0);
  const{storedData} = useLocalStorage(studentsList, 'students');
  const last = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const data: IStudent[] = storedData || [];
    const absent = data.reduce((prev, curr) => {return prev + curr.absent}, 0);
    setTotalAbsent(absent);
    setStudentsList(data);
  },[storedData]);
  const handleAddStudent = (newStudent: IStudent) => {
    setStudentsList([...studentsList, newStudent]);
  }
  const handleAbsent = (id: number, change: number) => {
    const newStudent = studentsList.map(student => student.id == id? {...student, absent: student.absent + change}: student );
    setStudentsList(newStudent);
    setTotalAbsent(totalAbsent + change);
  }
  const handleLast = () => {
    if(last.current){
      last.current.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <>
      <AddStudent 
      addStudent = {handleAddStudent}
      />
      <div className='students'>
        <div className="totalAbsent"><b>Total Absent: </b>{totalAbsent}</div>
        <button onClick={handleLast}>Click to go to Last Element</button>
      {studentsList.map(student => 
        <Student
        key={student.id}
        id={student.id}
        name={student.name}
        age={student.age}
        isGraduated={student.isGraduated}
        courses={student.courses}
        absent={student.absent}
        handleAbsent = {handleAbsent}
        />
      )}
    </div>
    <div className="last" ref={last}></div>
    </>
  )
}
export default App;
