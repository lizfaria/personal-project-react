import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import combineReducers from './reducers/index.js';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
  
