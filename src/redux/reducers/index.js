import {combineReducers} from 'redux';
import dataAdmin from './dataAdmin';
import modalAddClass from './modalAddClass'
import addClasses from './addClasses'
import controlClassList from './controlClassList';
import filter from './filter'
const Reducer = combineReducers({
    dataAdmin, //loginAdmin : loginAdmin
    modalAddClass,
    addClasses, 
    controlClassList,
    filter,
});

export default Reducer;