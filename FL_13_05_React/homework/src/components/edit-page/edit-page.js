import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCourse } from '../../redux/action';
import './edit-page.css';

function EditPage({ addCourse, data: { newCourse }, editableItemId }) {
    const history = useHistory();

    const getData = (e) => {
        e.preventDefault();
        const form = new FormData(document.forms[0]);
        
        const course = {
            date: form.get('date'),
            title: form.get('name'),
            description: form.get('description'),
            duration: form.get('duration'),
            author: form.get('authors'),
        }

        for (let el in course){
            if(!course[el]){
                alert('Enter all fields.');
                return false;
            }
        }

        newCourse.id ? addCourse(course, newCourse.id) : addCourse(course);
        history.push('/');
    }

    return (
        <main className='edit-page'>
            <h2 className='edit-page-title'>New course</h2>
            <form className='edit-page-form' action="">
                <label className='form-item-label' htmlFor='title'>Title*</label>
                <input className='form-input form-title-input' type="text" id='title' name='name' defaultValue={newCourse.title} />
                
                <label className='form-item-label'>Description*</label>
                <textarea className='form-input form-description-input' type="text" name='description' defaultValue={newCourse.description} />
                
                <div className='form-wrapper'>
                    <div>
                        <label className='form-item-label'>Duration*</label>
                        <input className='form-input form-duration-input' type="text" name='duration' defaultValue={newCourse.duration} />
                    
                        <label className='form-item-label'>Authors*</label>
                        <input className='form-input form-authors-input' type="text" name='authors' defaultValue={newCourse.author}/>
                    </div>
                    <div>
                        <label className='form-item-label'>Date*</label>
                        <input className='form-input form-date-input' type="date" name='date' defaultValue={newCourse.date} />
                    </div>
                </div>

                <div className='form-wrapper-btn'>
                    <button className='blue-btn submit-btn' type='submit' onClick={ getData } >Save</button>
                    <Link to='/' className='cancel-btn'>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCourse: (course, id) => dispatch(addCourse(course, id))
})

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPage);