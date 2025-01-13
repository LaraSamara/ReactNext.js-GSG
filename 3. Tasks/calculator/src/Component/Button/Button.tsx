import "./Button.css";
interface IProps{
    value: string;
    handleExpresion:(value: string) => void
}
function Button(props: IProps) {
    const handleClick = (value: string) =>{
        props.handleExpresion(value);
    }
    return (
        <button className={props.value == '='?"equal":(props.value == 'C')?"clear":"other"} onClick={() => handleClick(props.value)}>
            {props.value}
            </button>
    )
}
export default Button;
