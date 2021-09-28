import { types } from "../types/types";

const INITIAL_STATE = { content: null };

export const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.fetchArticles: {
        console.log('entra');
        return {
            ...state,
            pending: false,
            data: action.payload,
          };
    }
     
    default:
      return state;
  }
};
