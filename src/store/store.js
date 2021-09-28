import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//Session
import { authReducer } from "../reducers/authReducer";

import { modalReducer } from "../reducers/modalReducer";
import { snackBarReducer } from "../reducers/snackBarReducer";
import { settingsReducer } from "../reducers/settingsReducer";

//Handling data
import { articlesReducer } from "../reducers/articlesReducer";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackBarReducer,
  articles: articlesReducer,
  settings: settingsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);
