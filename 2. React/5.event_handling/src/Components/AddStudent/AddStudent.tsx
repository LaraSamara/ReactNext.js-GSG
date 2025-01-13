import { useState } from "react";
import { IStudent } from "../../Utils/Type.ts";
import AddCourse from "../AddCourse/AddCourse.tsx";
import './AddStudent.css';
import { Validation } from "../../Utils/Validation.ts";
interface IProps{
    addStudent: (student: IStudent) => void
}
const AddStudent = (props: IProps) => {
    const initialStudent:IStudent ={
        id: 0,
        name: "",
        age: 0,
        absent: 0,
        isGraduated: false,
        courses: []
    }
    const[student, setStudent] = useState<IStudent>(initialStudent);
    const[errorsList, setErrorsList] = useState<string[]>([]);
    const handleChange = (name: string, value: any) => {
        const newStudent = {...student, [name]: value};
        setStudent(newStudent);
    }
    const SubmitForm = () => {
        const newStudet = {...student, id: Date.now(), absent: 0};
        const errors:string[] = Validation(newStudet);
        setErrorsList(errors);
        if(errors.length == 0){
            setStudent(newStudet);
            props.addStudent(newStudet);
            clearForm();
        }
    }
    const clearForm = () => {
        setStudent(initialStudent);
    }
    return (
        <div className="forms">
            <div className="errors">
                {errorsList.map((error, index) => 
                    <div className="error" key={index+error}>{error}</div>
                )}
                </div>
            <div className="input-form">
                <label htmlFor="">Name</label>
                <input
                type="text" 
                value={student.name}
                onChange={e => handleChange('name', e.target.value)}
                />
            </div>
            <div className="input-form">
                <label htmlFor="">Age</label>
                <input
                type="text" 
                value={student.age}
                onChange={e => handleChange('age', Number(e.target.value))}
                />
            </div>
            <div className="checked-input">
                <label htmlFor="graduated">Is Student Graduated</label>
                <input 
                type='checkbox' 
                id="graduated"
                name="graduated"
                checked={student.isGraduated}
                onChange={e => handleChange('isGraduated', e.target.checked)}
                />
            </div>
            <AddCourse  addCourses={handleChange } Course={student.courses}/>
            <div className="btns">
                <button onClick={SubmitForm}>Add Student</button>
                <button onClick={clearForm}>Clear Student</button>
            </div>
        </div>
    )
}
export default AddStudent;