import React from 'react'
import { IItem } from '../../assets/Type.tsx';
import './Form.css';

interface Iprops{
    handleAdd: (task: IItem)=> void
}
function Form(props: Iprops) {
    const addTask =(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const Task = e.currentTarget["Task"].value;
        const IsUrgent = e.currentTarget["IsUrgent"].checked;
        if(Task.length > 5){
            const task :IItem = {
                Id: Date.now(),
                Task,
                IsUrgent,
                IsComplete: false,
            }
            props.handleAdd(task);
        }
    }
return (
    <form onSubmit={addTask}>
    <input type='text' name='Task' className='task' placeholder='Write Todo...'/>
    <div  className='urgent'>
    <input type='checkbox' name='IsUrgent' id='urgent'/>
    <label  htmlFor = "urgent">Urgent</label>
    </div>
    <input type='submit' value='Add Task' className='submit'/>
    </form>
)
}

export default Form
