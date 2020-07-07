import React, { useState } from 'react';
import './course-item.css';
import EditMenu from '../edit-menu';

function CourseItem(props) {

    const [isEditMenuOpen, setEditMenuVisible] = useState(false);
    
    const {date, title, description, duration } = props.data;
    
    const editMenu = isEditMenuOpen? <EditMenu data={props.data}/> : null;
    return (
        <li className='course-item'>
            <span className='course-item-date'>{ date }</span>
            <span className='course-item-title'>{ title }</span>
            <span className='course-item-description'>{ description }</span>
            <span className='course-item-duration'>{ duration }</span>
            <div className='course-item-edit-menu' onClick={() => setEditMenuVisible(!isEditMenuOpen)}>
                . . .
                {editMenu}
            </div>
            
        </li>
    )
}

export default CourseItem;