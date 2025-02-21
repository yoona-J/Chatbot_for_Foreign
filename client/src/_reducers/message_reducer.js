import {
    SAVE_MESSAGE,
    // REGISTER_USER
} from '../_actions/types';

export default function (state = {messages:[]}, action) {
    switch (action.type) {
        case SAVE_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            }
        // case REGISTER_USER:
        //     return { ...state, register: action.payload };
        
        default:
            return state;
    }
}