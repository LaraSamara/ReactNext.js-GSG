import { useEffect, useRef, useState } from 'react';
import './AddCourse.css';
interface IProps {
    addCourses: (name: string, value: any) => void,
    Course: string[]
}
const AddCourse = (props:IProps) => {
    // const [course, setCourse] = useState<string>("");
    const course = useRef<HTMLInputElement>(null);
    const[courses, setCourses] = useState<string[]>(props.Course);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( course.current){
            const newCoursesList = [...courses, course.current.value];
        setCourses(newCoursesList);
        props.addCourses('courses', newCoursesList);
        if(course.current){
            course.current.value = "";
        }
        }
        console.log( course.current?.value);
    }
    useEffect(() => {
        setCourses(props.Course);
        if(course.current){
            course.current.value = "";
        }
    },[props.Course]);
    return (
        <div className='course-form'>
            <form action="" onSubmit={handleSubmit}>
                <div className="course-input">
                    <label htmlFor="course">Course</label>
                    <input 
                    type="text" 
                    id="course" 
                    name="course"
                    ref ={course}
                    />
                </div>
                <input type='submit' value="Add Course" className='button'/>
            </form>
            {courses.length > 0  && <div className='courses'>[{courses.join(', ')}]</div>}
        </div>
    )
}
export default AddCourse;