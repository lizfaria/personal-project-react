// create initial state
const initialState = {
    userValue: ""
  };
export default function userValue(state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                userValue: action.payload
            } 
        default:
            return state;
    }
}