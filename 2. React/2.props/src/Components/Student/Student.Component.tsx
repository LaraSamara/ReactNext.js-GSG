import CoursesList from "../CoursesList/CoursesList.Component.tsx";
import "./Student.css";
interface IProps {
    name : string;
    age : number;
    isGraduated : boolean;
    coursesList : string [];
}
const Student = (props: IProps) => {
    return (
        <div className="student">
            <div>Name is: {props.name}</div>
            <div>Age is: {props.age}</div>
            <div>is Graduated: {props.isGraduated.toString()}</div>
            <CoursesList coursesList={props.coursesList}/>
        </div>
    )
}
export default Student;