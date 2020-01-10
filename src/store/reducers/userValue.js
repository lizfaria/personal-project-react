// create inital state
const initalState = {
    userValue: ""
  };

export default function userValue(state = initalState, action) {
    if (action.type = "SET_USER") {
        return action.payload;
    } else {
        return state;
    }
}

