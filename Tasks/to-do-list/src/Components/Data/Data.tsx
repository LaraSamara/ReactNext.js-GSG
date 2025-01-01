import React from 'react'
import { IItem } from '../../assets/Type.tsx';
import './Data.css';
interface IProps{
    tasks: IItem[];
}
function Data(props: IProps) {
    var CompletedCount = props.tasks.filter(task => task.IsComplete).length;
    var ArgentCount = props.tasks.filter(task => task.IsUrgent).length;
return (
    <div className='informations'>
    <div className='data'>
        <b>{props.tasks.length}</b>
        <span>Created Tasks</span>
    </div>
    <div className='data'>
        <b>{CompletedCount}</b>
        <span>Completed Tasks</span>
    </div>
    <div className='data'>
        <b>{ArgentCount}</b>
        <span>Argent Tasks</span>
    </div>
    </div>
)
}

export default Data
