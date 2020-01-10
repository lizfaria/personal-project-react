// create inital state
const initalState = {
    showSearch: true
  };

export default function showSearch(state = initalState, action) {
    if (action.type = "SET_SHOW_SEARCH") {
        return action.payload;
    } else {
        return state;
    }
}