import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from './reducers/index.js';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
  
