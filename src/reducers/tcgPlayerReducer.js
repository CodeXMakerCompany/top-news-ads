import { types } from "../types/types";

const INITIAL_STATE = { content: null }

export const tcgPlayerReducer = (state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case types.tcgAuthorization:
            return {
                ...state, auth: action.payload,
            }
        default:
            return state;
    }
}