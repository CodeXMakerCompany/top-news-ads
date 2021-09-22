import { types } from "../types/types";

const INITIAL_STATE = { theme: 'light', lang: null, user: null }

export const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setSettings:
      return {
        theme: action.payload.theme,
        lang: action.payload.lang,
        user: action.payload.user,
      };
    default:
      return state;
  }
};