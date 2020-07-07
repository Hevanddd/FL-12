import React from 'react';
import './course-list.css';
import SearchBar from '../search-bar';
import CourseItem from '../course-item';
import { connect } from 'react-redux';

function CourseList({data:{isFiltered, filteredCourses, courseList}}) {
     
    const courses = isFiltered ? filteredCourses : courseList;
    const list = courses.map((el) => {
        
        return <CourseItem key={el.id} data={el}/>
    })

    return ( 
        <main className='courses'>
            <SearchBar />
            <ul className='courses-list'>
                { list }
            </ul>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}


export default connect(
    mapStateToProps
)(CourseList);
