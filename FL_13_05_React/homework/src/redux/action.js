export const addCourse = (course, id) => {
    return {
        type: 'ADD_COURSE',
        payload: {course, id}
    }
}

export const deleteItem = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const filter = (text) => {
    return {
        type: 'FILTER',
        payload: text
    }
}

export const editCourse = (id) => {
    return {
        type: 'EDIT_COURSE',
        payload: id
    }
}

