import { types } from "../types/types";

export const setSettings = (theme, lang, user) => {
  return {
    type: types.setSettings,
    payload: {
      theme,
      lang,
      user,
    },
  };
};
