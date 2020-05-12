import * as types from './../constants/actionTypes';


export const admin = () => {
    return {
        
    }
}

// add classes from modal to class list 
export const addClasses = (classes) => {
    return {
        type : types.ADD_CLASSES,
        classes
    }
}

//show modal add classes
export const showModalAddClasses = () => {
    return {
        type : types.SHOW_MODAL_ADD_CLASSES,
    }
}
export const closeModalAddClasses = () => {
    return {
        type : types.CLOSE_MODAL_ADD_CLASSES,
    }
}

//control classes list 
export const keyControlClassList = (keyControl) => {
    return {
        type : types.ADD_KEY_CONTROL_CLASS_LIST,
        keyControl
    }
}

//function filter (use for all page in page Admin)
export const keyFilter = (keyFilter) => {
    return {
        type : types.ADD_KEY_FILTER,
        keyFilter
    }
}