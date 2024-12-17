interface IProps{
    list: string[]
}
const CoursesList = (props: IProps)=>{
    return <ul>
        {props.list.map((course, index) => 
            <li key={index+course}>{course}</li>
        )}
    </ul>
}
export default CoursesList;