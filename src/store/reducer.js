import { API_LIST_ACTION_TYPES } from "./actions";

const INITIAL_API_LIST_STATE = {
    recentRepos: ""
  };

// TODO: Write the reducer cases
const reducer = (state = INITIAL_API_LIST_STATE, action = {}) => {
  switch (action.type) {
    case API_LIST_ACTION_TYPES.SET_REPOS:
      return {
        ...state,
        recentRepos: action.payload
      };
    default: {
      return state;
    }
  }
};

export default reducer;