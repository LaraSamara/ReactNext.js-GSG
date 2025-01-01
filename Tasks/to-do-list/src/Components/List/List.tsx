import React from 'react'
import Item from '../Item/Item.tsx'
import { IItem } from '../../assets/Type.tsx'
import './List.css';
interface IProps{
    tasks: IItem[];
    handleDelete: (id: number)=> void;
    handleComplete: (id: number)=> void;
}
function List(props: IProps) {
return (
    <div className='list'>
        {props.tasks.map(task => 
        <Item 
        key={task.Id}
        item={task} 
        handleDelete = {() =>props.handleDelete(task.Id)} 
        handleComplete = {() =>props.handleComplete(task.Id)}    
        />
        )}
    </div>
)
}

export default List
