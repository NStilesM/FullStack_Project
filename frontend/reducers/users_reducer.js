import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.key) {
        case RECEIVE_CURRENT_USER:  
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser});
    
        default:
           return state;
    }
    
    
};

export default usersReducer;
