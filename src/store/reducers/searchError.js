// create inital state
const initalState = {
    searchError: false
  };

export default function searchError(state = initalState, action) {
    if (action.type = "SET_SEARCH_ERROR") {
        return action.payload;
    } else {
        return state;
    }
}