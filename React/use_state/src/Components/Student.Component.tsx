import { useState } from "react";
import { IStudent } from "../App.tsx";
import CoursesList from "./CoursesList/CoursesList.Component.tsx";
import "./Student/Student.css";

interface Iprops extends IStudent{

}
const Student = (props:Iprops) =>{
    const[absent, setAbsent] = useState(0);
    const AddAbsent = () =>{
        setAbsent(absent + 1);
    }
    const removeAbsent = () =>{
        if(absent > 0){
            setAbsent(absent - 1);
        }
    }
    const resetAbsent = ()=>{
        setAbsent(0);
    }
    return <div className="student" key={props.Id}>
        <div>Name is: {props.name}</div>
        <div> Age is: {props.age}</div>
        <div>is Graduated: {props.isGraduated.toString()}</div>
        <div>Absent: {absent}</div>
        <CoursesList list = {props.CouresesList} />
        <button onClick={AddAbsent}>Add</button>
        <button onClick={removeAbsent}>Remove</button>
        <button onClick={resetAbsent}>Reset</button>
    </div>
}
export default Student;