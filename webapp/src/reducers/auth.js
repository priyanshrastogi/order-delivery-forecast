import { LOGIN_USER, LOGOUT_USER } from '../actions';

export default function(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, authenticated: true };

        case LOGOUT_USER:
            return { ...state, authenticated: false };

        default:
            return state;
    }
}