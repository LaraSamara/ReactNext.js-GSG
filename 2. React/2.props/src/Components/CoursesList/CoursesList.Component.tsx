interface IProps {
    coursesList: string [];
}
const CoursesList = (props: IProps) => {
    return (
        <ul>
            {props.coursesList.map(course => <li>{course}</li>)}
        </ul>
    )
}
export default CoursesList;