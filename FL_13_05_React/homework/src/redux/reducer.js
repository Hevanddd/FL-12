import testData from '../data/testData';
import { ADD_COURSE, EDIT_COURSE, DELETE, FILTER } from './types';

const initialState = {
    courseList: testData,
    isFiltered: false, 
    filteredCourses: testData,
    newCourse: {}
}

const addNewCourse = (courseList, newCourse, existedId) => {
    let newCourseList = [];

    if(existedId) {
        newCourse.id = existedId;
        newCourseList = courseList.map((el) => {
            if(el.id === existedId){
                return newCourse;
            }
            return el;
        })
    } else {
        newCourse.id = courseList[courseList.length - 1].id + 1;
        newCourseList = courseList;
        newCourseList.push(newCourse);
    }

    return newCourseList;
}

function searchItemById (arr, id){
    return arr.filter((el) => 
        el.id === id )[0];
}

const filter = (courseList, title) => {
    if (title.lenght === 0) {
        return courseList;
    }

    const newCourseList = courseList.filter((item) => {
        return item.title.toUpperCase().indexOf(title.toUpperCase()) > -1;
    })
    return newCourseList;
}

const deleteItem = (courseList, id) => {
    
    const idx = courseList.findIndex((el) => el.id === id);
    const newCourseList = [
        ...courseList.slice(0, idx),
        ...courseList.slice(idx + 1)
    ];

    return newCourseList;
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COURSE: 
            return {
                ...state,
                courseList: addNewCourse(state.courseList, action.payload.course, action.payload.id),
                newCourse: {}
            }
        case EDIT_COURSE: 
            return {
                ...state,
                newCourse: searchItemById(state.courseList, action.payload)
            }
        case DELETE:
            return {
                ...state,
                courseList: deleteItem(state.courseList, action.payload)
            }
        case FILTER:
            return {
                ...state,
                filteredCourses: filter(state.courseList, action.payload),
                isFiltered: action.payload
            }

        default: return state;
    }
}

export default reducer;