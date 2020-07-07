import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteItem, editCourse } from '../../redux/action';

import './edit-menu.css';

function EditMenu({ deleteItem, editCourse, data }) {


    return (
        <ul className='edit-menu'>
            <li className='edit-menu-item' onClick = {() => editCourse(data.id)}><Link to='/edit'>Edit</Link></li>
            <li className='edit-menu-item' onClick = { () => deleteItem(data.id) }>Delete</li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (props) => dispatch(deleteItem(props)),
    editCourse: (props) => dispatch(editCourse(props))
})

export default connect(
    null,
    mapDispatchToProps
)(EditMenu);
