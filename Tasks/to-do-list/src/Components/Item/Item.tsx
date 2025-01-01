import React from 'react'
import {Trash, BatteryWarning} from '@phosphor-icons/react';
import { IItem } from '../../assets/Type.tsx';
import './Item.css';
interface IProps{
    item: IItem;
    handleComplete: ()=> void;
    handleDelete: () => void;
}
function Item(props:IProps) {
return (
<div className='item'>
        <div className='urgentIcon'>
        {props.item.IsUrgent == true && (<BatteryWarning size={16} color="#cd0e0e" weight="fill" />)}
        </div>
        <div className='taskItem'>
            <div className='taskInfo'>
            <input type='checkbox' checked={props.item.IsComplete} onChange={props.handleComplete} id={props.item.Id.toString()}/>
            <label htmlFor={props.item.Id.toString()}>{props.item.Task}</label>
            </div>
        <span className='trash'><Trash size={20} color="#cd0e0e" weight="fill" onClick={props.handleDelete} /></span>
        </div>
    </div>
)
}

export default Item
