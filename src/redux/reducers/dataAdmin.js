import * as types from '../constants/actionTypes';
var initialState = [];

var Reducer =( state = initialState , action) => {
    switch(action.type){
        case types.ADMIN:
            return state
        case types.SHOW_MODAL_ADD_CLASSES:
            let showModal = 'khaimeo'
            state.push(showModal);
            return [...state]
        default: return state ;   
    }
   
}

export default Reducer;