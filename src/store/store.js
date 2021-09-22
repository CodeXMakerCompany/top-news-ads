import { createStore, combineReducers } from "redux";

//Session
import { authReducer } from "../reducers/authReducer";

import { modalReducer } from "../reducers/modalReducer";
import { snackBarReducer } from "../reducers/snackBarReducer";
import { settingsReducer } from "../reducers/settingsReducer";
//Fetching data
import { tcgPlayerReducer } from "../reducers/tcgPlayerReducer";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackBarReducer,
  tcgPlayer: tcgPlayerReducer,
  settings: settingsReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
