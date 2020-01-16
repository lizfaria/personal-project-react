// create initial state
const initialState = {
    searchError: false
  };

const searchError = (state = initialState, action) => {
    switch(action.type) {
        case "SET_SEARCH_ERROR":
            return {
                ...state,
                searchError: action.payload
            } 
        default: 
            return state;
    }
}

export default searchError;

