import * as types from '../constants/actionTypes';
var initialState = false;

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.SHOW_MODAL_ADD_TEACHER:
            return !state
        case types.CLOSE_MODAL_ADD_TEACHER:
            return false
        default: return state ;   
    }
   
}

export default Reducer;