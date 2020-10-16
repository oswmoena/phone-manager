import { GET_USER_LIST } from '../actions/types'

const INITIAL_STATE = {
    ok: false,
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_USER_LIST:
            return {
                ...state,
                ok: action.payload.ok,
                users: action.payload.users,
            };
        default:
            return state;
    }
}