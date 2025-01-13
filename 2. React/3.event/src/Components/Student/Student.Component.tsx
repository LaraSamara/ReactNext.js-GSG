import { useState } from "react";
import { IStudent } from "../../App.tsx";
import CourseList from "../CoursesList/CourseList.Component.tsx";
import "./Student.css"

interface IProps extends IStudent{
    handelTotalAbsent: (name: string, change: number) => void
} 
const Student = (props: IProps) =>{
    const[absent, setAbsent] = useState(0);
    const addAbsent = () =>{
        setAbsent(absent + 1);
        props.handelTotalAbsent(props.Name, +1);
    }
    const removeAbsent = ()=>{
        if(absent > 0){
            setAbsent(absent - 1);
            props.handelTotalAbsent(props.Name, -1);
        }
    }
    const resetAbsent = ()=>{
        props.handelTotalAbsent(props.Name,-absent);
        setAbsent(0);
    }
    return <div className="student" key={props.Id}>
        <div>Name is: {props.Name}</div>
        <div>Age is: {props.age}</div>
        <div>Is Graduated: {props.isGraduated}</div>
        <div>Absent: {absent}</div>
        <CourseList list={props.coursesList}/>
        <button onClick={addAbsent}>Add</button>
        <button onClick={removeAbsent}>Remove</button>
        <button onClick={resetAbsent}>Reset</button>
    </div>
}
export default Student;