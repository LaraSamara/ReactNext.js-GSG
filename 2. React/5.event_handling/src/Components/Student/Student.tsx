import { useRef, useState } from "react";
import { IStudent } from "../../Utils/Type.ts";
import Course from "../Course/Course.tsx";
import './Student.css';
interface IProps extends IStudent{
    handleAbsent: (id: number, value: number) => void
}
const Student: React.FC<IProps> = (props:IProps) => {
    const[absent, setAbsent] = useState<number>(props.absent);
    const lastAbsent = useRef<number>(props.absent);
    const addAbsent = () => {
        lastAbsent.current = absent;
        setAbsent(absent + 1);
        props.handleAbsent(props.id, +1);
    }
    const removeAbsent = () => {
        if(absent > 0){
        lastAbsent.current = absent;
            setAbsent(absent - 1);
        props.handleAbsent(props.id, -1);
        }
    }
    const clearAbsent = () => {
        lastAbsent.current = absent;
        props.handleAbsent(props.id, -absent);
        setAbsent(0);
    }
    return (
        <div className="student">
            <div className="name"><b>Name: </b>{props.name}</div>
            <div className="age"><b>Age: </b>{props.age}</div>
            <div className="graduated"><b>Graduated: </b>{props.isGraduated? "Graduated": "Under Graduated"}</div>
            <Course courses={props.courses}/>
            <div className="absent">
                <b>Absent: </b>{absent}
                <div className="">
                <b>Last Absent: </b>{lastAbsent.current}
                </div>
                <div className="btns">
                    <button onClick={addAbsent }>+</button>
                    <button onClick={removeAbsent}>-</button>
                    <button onClick={clearAbsent}>Clear</button>
                </div>
                </div>
        </div>
    )
}
export default Student;