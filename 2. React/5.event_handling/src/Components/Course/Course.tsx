interface IProps{
    courses: string[]
}
const Course:React.FC<IProps> = (props: IProps) => {
    return(
        <div>
            <div><b>Courses:</b> </div>
            <ul>
            {props.courses.map((course, index) => <li key={index+course}>{course}</li>)}
        </ul>
        </div>
    )
}
export default Course;